import React from "react";
import work1 from "../assets/images/portfolio/dinghysailing.jpg";
import work2 from "../assets/images/portfolio/techontap.jpg";
import work3 from "../assets/images/portfolio/terravirtua.jpg";

function FeaturedWork() {
  return (
    <div>
      <div className="justify-center lg:justify-start flex">
        <h1 className="bg-gradient-to-r ml-0 lg:ml-12 mt-12 lg:mt-24 mb-8 from-blue-100 text-4xl lg:text-8xl text-center text-md font-first via-blue-500 to-red-600 inline-block text-transparent bg-clip-text">
          Featured Work
        </h1>
      </div>
      <div className="flex">
        <div className="border-4 absolute right-8 -mt-2 lg:-mt-10 lg:right-32 border-white w-1/3">
          <img src={work3} alt="seo" />
        </div>
        <div className="border-4 absolute ml-5   mt-5 lg:mt-10 lg:ml-24 left-5 border-white w-5/12">
          <img src={work1} alt="seo" />
        </div>
        <div className="border-4 absolute right-5 mt-20 lg:mt-64 lg:right-24 border-white w-5/12 lg:w-5/12">
          <img src={work2} alt="seo" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedWork;
