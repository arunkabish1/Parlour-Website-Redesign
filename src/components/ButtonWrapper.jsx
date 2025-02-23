import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ButtonWrapper = () => {
  return (
    <div>
      <SpotlightButton onClick={bookAppointment} />
    </div>
  );
};

const SpotlightButton = ({ onClick }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative max-w-xs overflow-hidden border-2 rounded-lg bg-slate-950 px-3 py-2 text-md font-medium text-white"
      onClick={onClick} // Add onClick handler
    >
      <span className="pointer-events-none font-bold font-quicksand relative z-10 mix-blend-difference">
        Book an Appointment
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-16 w-16 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

const bookAppointment = () => {
  // let customerName = document.getElementById("name").value;
  // let customerNumber = document.getElementById("number").value;
  let parlourNumber = "919600992566"; // Replace with the salon's WhatsApp number

  // if (!customerName || !customerNumber) {
  //   alert("Please enter your name and number.");
  //   return;
  // }

  let message = `Hello, I want to book an appointment.`;
  let whatsappURL = `https://wa.me/${parlourNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

export default ButtonWrapper;
