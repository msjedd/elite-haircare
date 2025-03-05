import React from "react";
import { motion } from "framer-motion";

const EliteHaircareLogo = () => {
  return (
    <div className="p-8 bg-white shadow-2xl flex flex-col items-center text-center border border-gray-300 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center text-black"
      >
        <div className="relative flex items-center justify-center text-9xl font-extrabold tracking-wide bg-gradient-to-r from-black to-gray-900 bg-clip-text text-transparent drop-shadow-lg">
          <span className="mr-6">E</span>
          <span className="h-36 w-[10px] bg-gradient-to-b from-black to-gray-900 mx-6"></span>
          <span className="ml-6">H</span>
        </div>
        <motion.img
          src="/floral.svg" // Use a high-quality SVG floral design
          alt="Floral Design"
          className="absolute w-32 h-auto opacity-100 drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <h1 className="mt-5 text-5xl font-extrabold tracking-wider text-black drop-shadow-xl uppercase">
        ELITE HAIRCARE
      </h1>
      <p className="mt-3 text-lg italic text-gray-900 font-semibold drop-shadow-md">
        Your Haircare is our business.
      </p>
    </div>
  );
};

export default EliteHaircareLogo;
