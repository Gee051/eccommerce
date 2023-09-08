"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  "assets/home1.jpg",
  "assets/home3.jpg",
  "assets/shoe1.jpg",
  "assets/home1.jpg",
  "assets/home3.jpg",
  "assets/shoe1.jpg"

];

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
         <SwiperSlide key={index}>
                <div className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover p-2 rounded-3xl"
            />
            
        
          </div>
          
         </SwiperSlide>
      ))}
      ...
    </Swiper>

  );
};

export default Banner;
