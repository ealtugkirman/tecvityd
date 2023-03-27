import React from "react";
import Lottie from "lottie-react";
import Ui from "../assets/user-interface.json";
import Web from "../assets/web-dev.json";
import Mobile from "../assets/mobile.json";
import Design from "../assets/design.json";

function Services() {
  return (
    <div>
      <div className="items-center justify-center flex">
        <div className="flex justify-center px-4 pt-8 items-center text-sm lg:text-2xl flex-row">
          <div className="w-1/4">
            <h1 className="text-white font-first mb-4 mt-1 text-center">
              User Interface
            </h1>
            <div className="w-4/5 mx-auto">
              <Lottie animationData={Ui} loop={true} />
            </div>
          </div>
          <div className="w-1/4">
            <h1 className="text-white font-first mb-8 lg:mb-16 text-center">
              Web Development
            </h1>
            <div className="w-4/5 mx-auto">
              <Lottie animationData={Web} loop={true} />
            </div>
          </div>
          <div className="w-1/4 mt-4">
            <h1 className="text-white font-first mt-5 lg:pt-5 text-center">
              Mobile App
            </h1>
            <div>
              <Lottie animationData={Mobile} loop={true} />
            </div>
          </div>
          <div className="w-1/4">
            <h1 className="text-white font-first mt-8 text-center">
              Graphic Design
            </h1>
            <div>
              <Lottie animationData={Design} loop={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white font-first bg-gradient-to-r from-blue-400 via-green-blue-400 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-4 lg:px-8 py-2 lg:py-4 text-center">
          More Services
        </button>
      </div>
    </div>
  );
}

export default Services;
