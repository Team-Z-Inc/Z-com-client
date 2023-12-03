// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CaroselContent.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import CaroselContent from "./CaroselContent";

function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CaroselContent Src="/img/newcaro-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CaroselContent Src="/img/newcaro-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CaroselContent Src="/img/newcaro-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CaroselContent Src="/img/newcaro-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
