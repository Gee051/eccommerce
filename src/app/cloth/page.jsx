"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { shuffle } from 'lodash'; 
import cloth from '../cloth';
import '../globals.css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import TypingImageBanner from '../components/WearsBanner';
import ProductList from '../components/ProductList';



export let allClothings = [];

allClothings = cloth.slice();

SwiperCore.use([Navigation ]);

const Page = () => {
 
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) {
        setSlidesPerView(2); 
      } else if (screenWidth < 768) {
        setSlidesPerView(3); 
      } else if (screenWidth < 1024) {
        setSlidesPerView(4); 
      } else {
        setSlidesPerView(5); 
      }
    };


    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shuffledCloth = shuffle(cloth);

  return (
    <div className="mx-auto gap-8 ">
      <div className="min-h-screen-2xl mb-16 ">
        <TypingImageBanner
          imagePath="/assets/clothlogo.avif"
          title="Fashion Faves Corner"
          description="Stylish apparel for every occasion, from casual to formal wear. Niggiwears got you covered"
          containerHeight="100vh"
        />
      </div>
      {/* Swiper */}
       <div className='mb-16 pt-9'>
        <h1 className='px-7 text-4xl mb-3 font-bold'>Top picks for you</h1>
        <Swiper
          navigation
          spaceBetween={10}
          slidesPerView={slidesPerView}
          className='py-3'
        >
          {shuffledCloth.slice(0, 15).map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/cloth/${item.id}`}>
               
                  <img
                    src={item.images[0]}
                    alt={`Image ${index}`}
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover p-2 rounded-3xl cover bg-white cursor-pointer"
                  />
                  <p className="text-center text-lg font-bold mt-2">{item.title}</p>
                
              </Link>
            
            </SwiperSlide>
          ))}
        </Swiper>
      </div> 
      <div>
        <ProductList products={cloth} category="cloth"/>
      </div>
    </div>
  );
};

export default Page;