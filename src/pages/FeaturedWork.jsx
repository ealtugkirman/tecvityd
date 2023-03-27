import React, { useRef } from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../App.css";
import work1 from "../assets/images/portfolio/dinghysailing.jpg";
import work2 from "../assets/images/portfolio/techontap.jpg";
import work3 from "../assets/images/portfolio/terravirtua.jpg";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const slide_img = [work1, work2, work3];

const FeaturedWork = () => {
    const swiperRef = useRef(null);
    
  return (
    <div className="bg-green-400 mt-14">
      <div className="justify-center flex">
        <h1 className="bg-gradient-to-r mt-6 lg:mt-12 mb-6 from-green-800 text-5xl lg:text-8xl text-center text-md font-first via-blue-500 to-red-600 inline-block text-transparent bg-clip-text">
          Featured Work
        </h1>
      </div>
      <Swiper
        pauseOnMouseEnter={true}
        centeredSlides={true}
        autoplay={{ delay: 250 }}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        className="mySwiper"
        ref={swiperRef}
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={slide_img[i]} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeaturedWork;
