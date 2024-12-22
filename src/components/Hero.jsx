import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type"; // Import SplitType
import bannergirl from "../assets/banner_girl.png";
import bride from "../assets/bride.png";
import bg from "../assets/bg.png";
import pin from "../assets/pin.png";
import makeupp from "../assets/makeupp.png";
import s from "../assets/s.png";
import "../index.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const revealRef = useRef(null);

  useEffect(() => {
    const splitTypes = revealRef.current.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: "chars" });

      gsap.fromTo(
        text.chars,
        { color: bg },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });
  }, []);

  const [menVisible, setMenVisible] = useState(true);
  const [womenVisible, setWomenVisible] = useState(false);
  const [hairVisible, setHairVisible] = useState(true);
  const [skinVisible, setSkinVisible] = useState(false);
  const [bridalVisible, setBridalVisible] = useState(false);

  const toggleMen = () => {
    setMenVisible(true);
    setWomenVisible(false);
    setBridalVisible(false);
    setHairVisible(true);
    setSkinVisible(false);
  };

  const toggleWomen = () => {
    setMenVisible(false);
    setBridalVisible(false);
    setWomenVisible(true);
    setHairVisible(true);
  };

  const Showhair = () => {
    setHairVisible(true);
    setSkinVisible(false);
    setBridalVisible(false);
  };

  const showSkin = () => {
    setHairVisible(false);
    setBridalVisible(false);
    setSkinVisible(true);
  };

  const showbridal = () => {
    setHairVisible(false);
    setSkinVisible(false);
    setBridalVisible(true);
  };

  return (
    <div>
      <div className="bg-[#145f7a] relative min-h-screen">
        <div className="mt-8 mb-10">
          <h1 className="reveal-type font-quicksand mb-5 text-white text-xl text-center">
            Where Love Meets Style.
          </h1>
          <p className="text-sm px-10 leading-6 font-sofia text-white text-center">
            At Rainbow, we believe in the harmony of beauty and excellence. Our
            mission is to provide top-notch beauty services using the finest and
            premium products. We strive to create an oasis of serenity where you
            can relax and leave looking and feeling your best.
          </p>
        </div>
        <div className="flex mt-2 mb-16 flex-row gap-2 justify-center">
          <button className="px-2 py-1 text-sm bg-white text-[#2596be] rounded-md hover:bg-[#d2e7ee] shadow-sm shadow-gray-300">
            Book Appointment
          </button>
          <button className="px-2 py-1  text-sm bg-[#145f7a] text-white border-white border rounded-md hover:bg-[#d2e7ee] shadow-sm ">
            Parlour Location
          </button>
        </div>
        <div className="relative  ">
          <img
            className="w-full relative top-6 scale-100 right-"
            src={bannergirl}
          />
          <div className="relative  left-0  w-full z-10">
            <div className="relative">
              <div className="bg-white  rounded-llg ">
                <h1 className="text-center px-2 font-mono pt-7 text-2xl">
                  Why Choose US?
                </h1>
                <div>
                  <img
                    src={s}
                    className="rounded-llg px-10 pt-10 pb-7"
                    alt=""
                  />
                </div>
                <div
                  ref={revealRef}
                  className="text-lg font-quicksand font-semibold text-center space-y-7"
                >
                  <p
                    className="reveal-type"
                    data-bg-color="#cccccc"
                    data-fg-color="#145f7a"
                  >
                    4 Years of Experience
                  </p>
                  <p
                    className="reveal-type"
                    data-bg-color="#cccccc"
                    data-fg-color="#145f7a"
                  >
                    Uncompromised Quality
                  </p>
                  <p
                    className="reveal-type"
                    data-bg-color="#cccccc"
                    data-fg-color="#145f7a"
                  >
                    Easy Accessible
                  </p>
                  <p
                    className="reveal-type"
                    data-bg-color="#cccccc"
                    data-fg-color="#145f7a"
                  >
                    Experienced Stylists
                  </p>
                </div>
                <div id="demo" className="pt-10 overflow-hidden"></div>
                <div className="flex justify-center">
                  <button className="px-2 py-1 mb-10 text-sm font-bebas tracking-widest bg-[#145f7a] text-white border-white border rounded-md hover:bg-[#d2e7ee] shadow-sm items-center">
                    Book A Service Today
                  </button>
                </div>
              </div>
              <div id="section-3">
                <div className="flex justify-center gap-5 mt-6">
                  <button
                    onClick={toggleMen}
                    className={` text-2xl font-serif ${
                      menVisible ? "text-white" : "text-[#3b7083]"
                    }`}
                  >
                    Men
                  </button>
                  <button
                    onClick={toggleWomen}
                    className={` text-2xl font-serif ${
                      womenVisible ? "text-white" : "text-[#3b7083]"
                    }`}
                  >
                    Women
                  </button>
                </div>
                <div
                  id="Men"
                  className={`flex mt-3 text-white text-lg font-cursive gap-10 justify-center ${
                    menVisible ? "" : "hidden"
                  }`}
                >
                  <button
                    className={`${
                      hairVisible ? "text-white" : "text-[#b8bcbd]"
                    }`}
                    onClick={Showhair}
                  >
                    Hair
                  </button>
                  <button
                    className={`${
                      skinVisible ? "text-white" : " text-[#b8bcbd]"
                    }`}
                    onClick={showSkin}
                  >
                    Skin
                  </button>
                  <button
                    className={`${
                      bridalVisible ? "text-white" : "text-[#b8bcbd]"
                    }`}
                    onClick={showbridal}
                  >
                    Pre-wedding & Bridal
                  </button>
                </div>
                <div
                  className={`flex mt-3  duration-150 text-white text-lg font-cursive gap-10 justify-center ${
                    womenVisible ? "" : "hidden"
                  }`}
                >
                  <button
                    className={`${
                      hairVisible ? "text-white" : "text-[#b8bcbd]"
                    }`}
                    onClick={Showhair}
                  >
                    Hair
                  </button>
                  <button
                    className={`${
                      skinVisible ? "text-white" : " text-[#b8bcbd]"
                    }`}
                    onClick={showSkin}
                  >
                    Skin
                  </button>
                  <button
                    className={`${
                      bridalVisible ? "text-white" : "text-[#b8bcbd]"
                    }`}
                    onClick={showbridal}
                  >
                    Pre-wedding & Bridal
                  </button>
                </div>

                <div ref={revealRef} className="">
                  <div className={` ${hairVisible ? "" : "hidden"}`}>
                    <p
                      className="text-white text-sm text-center font-quicksand p-6 reveal-type"
                      data-bg-color="#145f7a"
                      data-fg-color="white"
                    >
                      Naturals offers premium unisex grooming with expert
                      barbering, precise styling, fades, trims, relaxing
                      treatments, hair coloring, and luxurious pampering.
                    </p>
                  </div>
                  <div className={` ${skinVisible ? "" : "hidden"}`}>
                    <p
                      className="text-white text-sm text-center font-quicksand p-6 reveal-type"
                      data-bg-color="#145f7a"
                      data-fg-color="white"
                    >
                      At Naturals, the skincare is elevated with advanced
                      treatments like deep cleansing, hydrating facials,
                      exfoliation, brightening, and anti-aging solutions,
                      ensuring total rejuvenation and care.
                    </p>
                  </div>
                  <div className={` ${bridalVisible ? "" : "hidden"}`}>
                    <p
                      className="text-white text-sm text-center font-quicksand p-6 reveal-type"
                      data-bg-color="#145f7a"
                      data-fg-color="white"
                    >
                      Naturals offers exclusive wedding grooming services for
                      grooms, including tailored haircuts, skin treatments,
                      facials, body polishing, and relaxing massages.
                    </p>
                  </div>
                  <div>
                    <img
                      className="rounded-lg  w-11/12 mb-5 mx-auto "
                      src={pin}
                      alt=""
                    />
                    <div className="flex justify-center mt-6">
                      <a
                        href="https://api.whatsapp.com/message/3UF3YMVU3JMJA1"
                        className="px-5 py-0.5 mb-5 text-lg font-sofia  bg-[#145f7a] text-white border-white border rounded-md hover:bg-[#d2e7ee] shadow-sm items-center"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="section-3">
                <div className="relative">
                  <div className="">
                    <img className="" src={bg} alt="bg" />
                  </div>
                  <section ref={revealRef} className="absolute top-10 z-30">
                    <h1
                      className="text-4xl shadow-sm text-[#145f7a] mb-6 text-center font-semibold font-barlow reveal-type"
                      data-bg-color="#cccccc"
                      data-fg-color="#145f7a"
                    >
                      Exclusively Bridal
                    </h1>
                    <p
                      className="text-sm font-sofia text-center px-20 py-1 reveal-type"
                      data-bg-color="#cccccc"
                      data-fg-color="black"
                    >
                      Make your wedding day unforgettable with our luxurious
                      bridal services. At Naturals, we rely on premium products
                      and uphold the highest hygiene standards to ensure a
                      flawless, radiant look. Trust our expert team to provide
                      you with exceptional care and beauty on your special day.
                    </p>
                  </section>
                  <div className="absolute z-10 bottom-0 py">
                    <img className="scale-100" src={bride} alt="bride" />
                  </div>
                </div>
                <div></div>
              </div>
              <div  id="section-4">
                <div className="bg-slate-100 rounded-b-lg">
                  <div ref={revealRef}  className="">
                    <h1
                      className="text-center text-lg font-quicksand font-bold text-[#145f7a] p-5 reveal-type"
                      data-bg-color="#cccccc"
                      data-fg-color="#145f7a"
                    >
                      Rainbow Beauty Academy
                    </h1>
                    <p className="text-pretty text-center text-[#145f7a] text-sm p-5 leading-5 font-quicksand whitespace-normal reveal-type" data-bg-color="#cccccc" data-fg-color="#145f7a">
                      Join Rainbow Beauty Academy to gain top-tier <br /> beauty
                      training from industry experts. Our programs provide
                      hands-on experience and essential skills using premium
                      products, preparing you for a successful career in the
                      beauty industry.
                    </p>
                  </div>
                  <div className="flex justify-center mt-6">
                    <a
                      href="https://api.whatsapp.com/message/3UF3YMVU3JMJA1"
                      className="px-2 py-0.5 mb-10 text-sm font-sofia  bg-[#145f7a] text-white border-white border rounded-md hover:bg-[#d2e7ee] shadow-sm items-center"
                    >
                      Enroll Now
                    </a>
                  </div>
                  <div>
                    <img className="" src={makeupp} alt="" />
                  </div>
                </div>
                <div>
                  <div>
                    <div id="section-5" className="">
                      <h1 className="text-lg mt-3 font-quicksand font-semibold text-white pt-4 text-center">
                        What Our Valuable Customers Says
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
