import React from "react";
import hero1 from "../assets/hero-left.json";
import Lottie from "lottie-react";
import button from "../assets/button-green.json";
import hero2 from "../assets/hero3.json";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

function Hero() {
  return (
    <div className="bg-black">
      <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className="hidden lg:flex absolute mt-18 left-0 w-2/5">
        <Lottie animationData={hero1} loop={true} />
      </motion.div>

      <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className="text-white font-first pb-4 lg:pb-24 pt-0 lg:pt-12 text-center items-center flex flex-col justify-center">
        <h1 className="font-bold py-4 lg:py-8 text-5xl hover:text-green-500 lg:text-6xl">
          Creative Technological <br /> Solutions
        </h1>
        <p className="text-xl py-2 hover:text-green-500">
          Wee see what others don't
        </p>
        <p className="text-xl py-2 hover:text-green-500">
          We deliver what other won't
        </p>
        <div className="w-1/2 lg:w-1/6 pt-4 items-center justify-center flex">
          <Lottie animationData={button} loop={true} />
        </div>
      </motion.div>
      <motion.div variants={fadeIn('left', 0.4)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className="hidden lg:flex w-1/4 lg:w-1/3 absolute top-64 lg:top-72 right-2 lg:right-10 items-center justify-center">
        <Lottie animationData={hero2} loop={true} />
          </motion.div>
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}}>
              <h1 className="text-red-200 pl-8 lg:pl-14 pt-14 lg:pb-10  font-first text-3xl lg:text-7xl">
                  What Tecvity Offers?
              </h1>
          </motion.div>
    </div>
  );
}

export default Hero;
