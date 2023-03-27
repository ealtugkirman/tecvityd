import React from "react";
import hero2 from "../assets/hero3.json";
import Lottie from "lottie-react";
import Ui from "../assets/user-interface.json";
import Web from "../assets/web-dev.json";
import Mobile from "../assets/mobile.json";
import Design from "../assets/design.json";
import Card from "../components/Card";

function Services() {
  return (
    <div>
      <div className="flex justify-center px-4  pt-8 items-center text-md lg:text-2xl flex-row">
        <div className="w-1/4">
        <h1 className="text-white font-first mb-4 mt-1 text-center">
          User  Interface
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
        {/* <Card title="User Interface" Animation={Ui} />
        <Card title="Web Development" Animation={Web} />
      </div>
      <div className="flex justify-center px-4 pt-8 items-center text-md lg:text-2xl flex-row">
        <Card title="Mobile App" Animation={Mobile} />
        <Card title="Graphic Design" Animation={Design} /> */}
      </div>
    </div>
  );
}

export default Services;
