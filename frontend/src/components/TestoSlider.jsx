// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TestoData } from "../../public/data/TestoData";

function TestoSlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination
    >
      {TestoData.map((item) => (
        <SwiperSlide
          key={item.id}
          className="md:h-[420px] sm:px-8 md:px-0 flex md:flex-row flex-col items-center md:items-stretch select-none"
        >
          <img
            src={item.img}
            alt={item.testoName}
            className="md:w-[40%] w-[300px] h-[100%] bg-contain bg-center"
          />
          <div className="bg-[#fff6da] sm:p-8 py-4">
            <p className="text-gray-500 md:text-xl text-lg font-light md:leading-10">
              {item.desc}
            </p>
            <h1 className="text-2xl text-center md:text-left font-semibold text-gray-800 md:mt-10 mt-5">
              ___ {item.testoName}
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestoSlider;
