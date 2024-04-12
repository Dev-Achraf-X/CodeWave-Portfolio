// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { featureData } from "../../public/data/FeatureData";

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
      {featureData.map((item) => (
        <SwiperSlide
          key={item.id}
          className="h-[260px] px-10 md:px-0 border-transparent border-2 hover:border-2  hover:scale-105 transition-all cursor-pointer pb-5 "
        >
          <img src={item.img} alt="" className="w-[100%] h-[85%] bg-cover" />
          <h1 className="text-2xl font-semibold text-gray-500">{item.title}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderFeatCPN;
