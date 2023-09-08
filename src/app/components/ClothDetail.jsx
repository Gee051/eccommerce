"use client"
import React, { useState, useEffect } from 'react';
import { ImCart } from 'react-icons/im';
import { GoHeart } from 'react-icons/go';
import Link from 'next/link';
import Image from 'next/image';
import { useNavigation } from 'next/navigation'; 

import { allClothings } from '../page'; 

const ClothDetail = () => {
  const navigation = useNavigation(); 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredWearIndex, setHoveredWearIndex] = useState(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [navigation.router.asPath]);

  const item = allClothings.find((clothing) => clothing.slug === slug);

  if (!item) {
    return <div>Item not found.</div>;
  }

  const handleSwiperClick = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % item.images.length;
      } else if (direction === 'prev') {
        return (prevIndex - 1 + item.images.length) % item.images.length;
      }
    });
  };

  const relatedItems = allClothings.filter(
    (relatedItem) => relatedItem.category === item.category && relatedItem.slug !== item.slug
  );

  return (
    <div className="mx-auto pt-32 z-0 gap-3">
     

      <div className="p-4">
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src={item.images[currentIndex]}
              alt={item.title}
              className="object-contain w-64 h-72 cursor-pointer rounded-t-lg"
            />
            {item.images.length > 1 && (
              <div className="flex " >
                <button
                  className="p-2 bg-white shadow-md rounded-full flex absolute top-32 font-bold"
                  onClick={() => handleSwiperClick('prev')}
                 
                >
                  &lt;
                </button>
                <button
                  className="p-2  bg-white shadow-md rounded-full font-bold flex absolute top-32 left-56 "
                  onClick={() => handleSwiperClick('next')}
                  
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
          <div className="ml-8">
            <h3 className="text-lg font-semibold mb-1 hover:text-magenta">{item.title}</h3>
            <p className="text-gray-600 text-lg">{item.description}</p>
            <p className="text-[#286f6b] text-lg">{item.price}</p>
            <div className="flex items-center space-x-4 mt-4">
              <Image src="/assets/fivestar.png" width={100} height={100} alt="fivestar" />

              <button className="p-2 bg-white shadow-md rounded">
                <ImCart />
              </button>
              <button className="p-2 bg-white shadow-md rounded">
                <GoHeart />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 p-4">
        {relatedItems.map((relatedItem, index) => (
          <Link href={`/cloth/${relatedItem.slug}`} key={relatedItem.id}>
            <div
              className="border rounded-lg p-4 m-4 shadow-md flex flex-col justify-between image-container relative"
              onMouseEnter={() => setHoveredWearIndex(index)}
              onMouseLeave={() => setHoveredWearIndex(null)}
            >
              <div className="border-b pb-2">
                <img
                  src={relatedItem.images[0]}
                  alt={relatedItem.title}
                  className="object-contain w-64 h-72 cursor-pointer rounded-t-lg"
                />
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-1 hover:text-magenta">{relatedItem.title}</h3>
                <p className="text-gray-600 text-lg">{relatedItem.description}</p>
                <p className="text-[#286f6b] text-lg">{relatedItem.price}</p>
              </div>

              <div
                className={`absolute top-0 right-0 mt-2 mr-2 flex flex-col items-center space-y-2 icon-container ${
                  hoveredWearIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
                style={{
                  transform: `translateX(${hoveredWearIndex === index ? '0' : '100%'})`,
                  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                }}
              >
                <button className="p-2 bg-white shadow-md rounded hover:bg-magenta">
                  <ImCart />
                </button>
                <button className="p-2 bg-white shadow-md rounded hover:bg-magenta">
                  <GoHeart />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClothDetail;
