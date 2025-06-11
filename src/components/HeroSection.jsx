import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

function HeroSection() {
  return (
    <>
      <div id="hero-section"></div>

      <div
        className="w-full h-screen overflow-hidden bg-no-repeat bg-cover bg-center flex flex-col md:flex-row"
        style={{ backgroundImage: `url('/wk-shoes-bg-img.png')` }}
      >
        <div className="flex items-center justify-center h-1/2 md:h-full w-full md:w-1/2 px-4 md:px-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center md:text-left mt-8 md:mt-0 leading-tight">
            <div className="mb-3">Welcome to</div>
            <div className="mb-3 text-[#f8f05e]">Wajahat Kamal</div>
            <div>Shoes Store</div>
          </h1>
        </div>

        <div className="relative h-1/2 md:h-full w-full md:w-[55%] flex justify-start items-center px-10 pb-10 md:pb-0">
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1, 0.9] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <img
              src="/wk-shoes-main-1.png"
              alt="Main Shoe Img"
              className="w-70 transform scale-x-[-1]"
              style={{ zIndex: 20 }}
            />
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1, 0.9] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <img
              src="/wk-shoes-main-2.png"
              alt="Main Shoe Img"
              className="w-70 "
              style={{ zIndex: 20 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
