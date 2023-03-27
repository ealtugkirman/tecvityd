import React from "react";
import Lottie from "lottie-react";
import Ui from "../assets/user-interface.json";

function Card({ title, Animation }) {
  return (
    <div className="shadow-md rounded-md text-center items-center overflow-hidden">
      <div className="p-4 bg-transparent">
        <h2 className="text-white font-first">{title}</h2>
        <div className="p-4">
          <div className="bg-transparent p-4 ">
            <Lottie animationData={Animation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
