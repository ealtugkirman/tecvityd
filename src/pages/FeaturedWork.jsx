import React from "react";
import work1 from "../assets/images/portfolio/dinghysailing.jpg";
import work2 from "../assets/images/portfolio/techontap.jpg";
import work3 from "../assets/images/portfolio/terravirtua.jpg";

function FeaturedWork() {
  return (
    <div>
      <div className="justify-center lg:justify-start flex">
        <h1 className="bg-gradient-to-r ml-0 lg:ml-12 mt-12 lg:mt-24 mb-8 from-blue-100 text-5xl lg:text-8xl text-center text-md font-first via-blue-500 to-red-600 inline-block text-transparent bg-clip-text">
          Featured Work
        </h1>
      </div>
      <div className="flex flex-col items-center lg:inline-block lg:mt-32items-center lg:flex-row">
        <div className="border-4 w-4/5 lg:absolute my-2 -mt-4 lg:-mt-10 lg:right-32 border-white lg:w-1/3">
          <img src={work3} alt="seo" />
        </div>
        <div className="border-4 w-4/5 lg:absolute my-2  lg:mt-10 lg:ml-24 lg:left-5 border-white lg:w-5/12">
          <img src={work1} alt="seo" />
        </div>
        <div className="border-4 w-4/5 lg:absolute my-2 lg:mt-64 lg:right-24 border-white lg:w-5/12">
          <img src={work2} alt="seo" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedWork;
