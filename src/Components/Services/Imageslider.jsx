import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Imageslider.css";
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/majestic-mountain-range-tranquil-waterfall-drop-beauty-generated-by-ai_188544-28214.jpg?ga=GA1.1.2000051094.1716005427"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794690.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794690.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794729.jpg?ga=GA1.1.2000051094.1716005427"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/view-natural-waterfall-landscape_23-2150763584.jpg?ga=GA1.1.2000051094.1716005427"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787888.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380343.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380343.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
