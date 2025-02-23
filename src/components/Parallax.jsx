import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Bride from "./../assets/pin.png";
import Learn from "./../assets/makeup.png";

export const Parallax = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={Bride}
        subheading="Rainbow Bridal Artistry "
        heading="Exclusively For Bridal"
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={Learn}
        subheading="Rainbow Academy"
        heading="Unlock Your Beauty Potential at Our Academy."
      >
        <ExampleContent1 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center font-monstserrat text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center font-monstserrat text-4xl font-bold md:text-7xl">
        {heading}
      </p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 font-monstserrat text-3xl font-bold md:col-span-4">
      Transforming You Into the Bride of Your Dreams.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl font-quicksand text-neutral-600 md:text-2xl">
        Make your wedding day unforgettable with our luxurious bridal services.
        At Rainbow's, we rely on premium products and uphold the highest hygiene
        standards to ensure a flawless, radiant look. Trust our expert team to
        provide you with exceptional care and beauty on your special day.
      </p>

      <button
        onClick={bookAppointment}
        className=" font-quicksand w-full mt-2 rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
      >
        Book Your Slot <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 font-monstserrat text-3xl font-bold md:col-span-4">
      Empowering You to Master the Art of Beauty.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl font-quicksand text-neutral-600 md:text-2xl">
        Join Rainbow Beauty Academy to gain top-tier beauty training from
        industry experts. Our programs provide hands-on experience and essential
        skills using premium products, preparing you for a successful career in
        the beauty industry.
      </p>

      <button
        onClick={bookAppointment}
        className="w-full mt-2 font-quicksand rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
      >
        Book a Certified Course
        <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const bookAppointment = () => {
  // let customerName = document.getElementById("name").value;
  // let customerNumber = document.getElementById("number").value;
  let parlourNumber = "919600992566"; // Replace with the salon's WhatsApp number

  // if (!customerName || !customerNumber) {
  //   alert("Please enter your name and number.");
  //   return;
  // }

  let message = `Hello, I want to book an Appointment Today.`;
  let whatsappURL = `https://wa.me/${parlourNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};
