import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import imgOne from '@/assets/img/slider/one.png'
import imgTwo from '@/assets/img/slider/two.png'
import imgThree from '@/assets/img/slider/three.png'

const Slider = () => {
  return (
    <div >
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper container mx-auto mt-20">
        <SwiperSlide><img width={'w-full'} src={imgOne} alt=""/></SwiperSlide>
        <SwiperSlide><img width={'w-full'} src={imgOne} alt=""/></SwiperSlide>
        <SwiperSlide><img width={'w-full'} src={imgOne} alt=""/></SwiperSlide>
        <SwiperSlide><img width={'w-full'} src={imgOne} alt=""/></SwiperSlide>
        <SwiperSlide><img width={'w-full'} src={imgOne} alt=""/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;