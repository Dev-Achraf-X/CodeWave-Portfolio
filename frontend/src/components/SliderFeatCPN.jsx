// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SliderFeatCPN() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={30}
      navigation
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide className="h-[260px] px-10 md:px-0 border-transparent border-2 hover:border-2 hover:border-primary-500 cursor-pointer pb-5 ">
        <img
          src="https://www.nita.edu.sa/images/thumbs/0001200_web-development-beginner.jpeg"
          alt=""
          className="w-[100%] h-[85%] bg-cover"
        />
        <h1 className="text-2xl font-semibold text-gray-500">
          Web Developpment
        </h1>
      </SwiperSlide>
      <SwiperSlide className="h-[260px] px-10 md:px-0 border-transparent border-2 hover:border-2 hover:border-primary-500 cursor-pointer pb-5 ">
        <img
          src="https://designshack.net/wp-content/uploads/sketch-website-templates.jpg"
          alt=""
          className="w-[100%] h-[85%] bg-cover"
        />
        <h1 className="text-2xl font-semibold text-gray-500">Web Design</h1>
      </SwiperSlide>
      <SwiperSlide className="h-[260px] px-10 md:px-0 border-transparent border-2 hover:border-2 hover:border-primary-500 cursor-pointer pb-5 ">
        <img
          src="https://leverageedu.com/discover/wp-content/uploads/2023/03/Web-Developer.png"
          alt=""
          className="w-[100%] h-[85%] bg-cover"
        />
        <h1 className="text-2xl font-semibold text-gray-500">
          Web Developpment
        </h1>
      </SwiperSlide>
      <SwiperSlide className="h-[260px] px-10 md:px-0 border-transparent border-2 hover:border-2 hover:border-primary-500 cursor-pointer pb-5 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1V5e5FkHRyyR9RA0wU00hOsFOUCZcyzlT1ZfowsQTw&s"
          alt=""
          className="w-[100%] h-[85%] bg-cover"
        />
        <h1 className="text-2xl font-semibold text-gray-500">Web Hosting</h1>
      </SwiperSlide>
      <SwiperSlide className="h-[260px] px-10 md:px-0 border-transparent border-2 hover:border-2 hover:border-primary-500 cursor-pointer pb-5 ">
        <img
          src="https://i.pinimg.com/736x/38/fc/d8/38fcd8722f438cfeb890e821dd4f93e0.jpg"
          alt=""
          className="w-[100%] h-[85%] bg-cover"
        />
        <h1 className="text-2xl font-semibold text-gray-500">Web Design</h1>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderFeatCPN;
