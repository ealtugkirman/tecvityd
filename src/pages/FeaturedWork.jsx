import React from "react";
import work1 from "../assets/images/portfolio/dinghysailing.jpg";
import work2 from "../assets/images/portfolio/techontap.jpg";
import work3 from "../assets/images/portfolio/terravirtua.jpg";

function FeaturedWork() {
  return (
    <div className="">
      <div className="mt-16 lg:mt-24  py-0 flex ml-10 lg:ml-24 text-4xl lg:text-8xl text-center text-md font-first">
        <h1 className="bg-gradient-to-r from-blue-100 via-blue-500 to-red-600 inline-block text-transparent bg-clip-text">
          Featured Work
        </h1>
      </div>
      <div className="border-4 absolute right-14 lg:-mt-10 lg:right-32 -mt-6 border-white w-1/3">
        <img src={work3} alt="seo" />
      </div>
      <div className="border-4 absolute ml-5   mt-5 lg:mt-10 lg:ml-24 left-5 border-white w-5/12">
        <img src={work1} alt="seo" />
      </div>
      <div className="border-4 absolute right-10 mt-24 lg:mt-64 lg:right-24 border-white w-5/12 lg:w-5/12">
        <img src={work2} alt="seo" />
      </div>
    </div>
  );
}

export default FeaturedWork;
