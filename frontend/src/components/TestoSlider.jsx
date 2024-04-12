// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TestoSlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination
    >
      <SwiperSlide className="md:h-[420px] sm:px-8 md:px-0 flex md:flex-row flex-col items-center md:items-stretch select-none">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsrnfGE3urLpfnyU9JqMBPBeMk019xUdGwuBqHKiD_g&s"
          alt=""
          className="md:w-[40%] w-[300px] h-[100%] bg-contain bg-center"
        />
        <div className="bg-[#fff6da] sm:p-8 py-4">
          <p className="text-gray-500 md:text-xl text-lg font-light md:leading-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            necessitatibus placeat, sint molestias modi cumque obcaecati
            distinctio debitis quam repudiandae, autem expedita. sint molestias
            modi cumque obcaecati distinctio debitis quam repudiandae, autem
            expedita.
          </p>
          <h1 className="text-2xl text-center md:text-left font-semibold text-gray-800 md:mt-10 mt-5">
            ___ MR.Jack
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="md:h-[420px] sm:px-8 md:px-0 flex md:flex-row flex-col items-center md:items-stretch select-none">
        <img
          src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
          alt=""
          className="md:w-[40%] w-[300px] h-[100%] bg-contain bg-center"
        />
        <div className="bg-[#fff6da] sm:p-8 py-4">
          <p className="text-gray-500 md:text-xl text-lg font-light md:leading-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            necessitatibus placeat, sint molestias modi cumque obcaecati
            distinctio debitis quam repudiandae, autem expedita. sint molestias
            modi cumque obcaecati distinctio debitis quam repudiandae, autem
            expedita.
          </p>
          <h1 className="text-2xl text-center md:text-left font-semibold text-gray-800 md:mt-10 mt-5">
            ___ MR.Jack
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="md:h-[420px] sm:px-8 md:px-0 flex md:flex-row flex-col items-center md:items-stretch select-none">
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          alt=""
          className="md:w-[40%] w-[300px] h-[100%] bg-contain bg-center"
        />
        <div className="bg-[#fff6da] sm:p-8 py-4">
          <p className="text-gray-500 md:text-xl text-lg font-light md:leading-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            necessitatibus placeat, sint molestias modi cumque obcaecati
            distinctio debitis quam repudiandae, autem expedita. sint molestias
            modi cumque obcaecati distinctio debitis quam repudiandae, autem
            expedita.
          </p>
          <h1 className="text-2xl text-center md:text-left font-semibold text-gray-800 md:mt-10 mt-5">
            ___ MR.Jack
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TestoSlider;
