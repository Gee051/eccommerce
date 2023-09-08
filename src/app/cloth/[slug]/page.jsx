"use client"
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { allClothings } from "../page";
import "swiper/css/pagination";
import SlideNavButtons from "../SlideButtons";
import SwiperCore from "swiper/core";
import RelatedItems from "@/app/components/RelatedItems";
import { cartState } from "@/app/cartState/page";

function fetchClothings(params) {
  const wears = allClothings.find((clothing) => clothing.id === params.slug);
  return wears;
}

function findRelateditems(itemType) {
  return allClothings.filter((clothing) => clothing.id.startsWith(itemType));
}

SwiperCore.use([Navigation, Pagination]);

export default function Page({ params }) {
  const wears = fetchClothings(params);
  const itemType = wears.id.replace(/[0-9]/g, "");
  const relatedItems = findRelateditems(itemType, wears.id);
  const [selectedSize, setSelectedSize] = useState("");
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [showSizeError, setShowSizeError] = useState(false);
  const [showAddMessage, setShowAddMessage] = useState(false);
  const [addedItems, setAddedItems] = useState([]); 
  

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? "" : size);
  };

  const handleAddToCart = () => {
    const existingItem = cartItem.find(item => item.id === wears.id);
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }

    setShowSizeError(false);

    if (!existingItem) {
      const newCartItem = { ...wears, size: selectedSize, quantity: 1 };
      setCartItem(prevItems => [...prevItems, newCartItem]);
      setShowAddMessage(true);
      setTimeout(() => {
        setShowAddMessage(false);
      }, 700); 
    }
  }

  return (
    <div className="container mx-auto p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12">
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={false}
            pagination={{ clickable: true }}
          >
            {wears.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="h-[600px] w-full object-contain cursor-pointer"
                  />
                  <div>
                    <SlideNavButtons />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 p-4">
          <h1 className="text-2xl md:text-4xl py-3 font-semibold hover:text-magenta">
            {wears.title}
          </h1>
          <p className="text-sm md:text-xl font-medium py-3">
            {wears.description}
          </p>
          <Image
            src="/assets/fivestar.png"
            width={100}
            height={200}
            alt="rating"
          />
          <h2 className="text-black font-bold text-xl md:text-3xl py-2">
            ₦{wears.price}
          </h2>
          <hr className="my-2 md:my-4 border-t-2 border-gray-300" />

          <div className="flex items-center space-x-4 md:space-x-2 p-3">
            <div className="text-base md:text-xl font-semibold">Size:</div>
            <div className="flex items-center space-x-2 ">
              <button
                className={`border px-3 py-1 md:px-4 md:py-2 rounded-md hover:scale-105 hover:transition ${
                  selectedSize === "XS" ? "bg-magenta" : ""
                }`}
                onClick={() => handleSizeClick("XS")}
              >
                XS
              </button>
              <button
                className={`border px-3 py-1 md:px-4 md:py-2 rounded-md hover:scale-105 hover:transition ${
                  selectedSize === "S" ? "bg-magenta" : ""
                }`}
                onClick={() => handleSizeClick("S")}
              >
                S
              </button>
              <button
                className={`border px-3 py-1 md:px-4 md:py-2 rounded-md hover:scale-105 hover:transition ${
                  selectedSize === "M" ? "bg-magenta" : ""
                }`}
                onClick={() => handleSizeClick("M")}
              >
                M
              </button>
              <button
                className={`border px-3 py-1 md:px-4 md:py-2 rounded-md hover:scale-105 hover:transition ${
                  selectedSize === "L" ? "bg-magenta" : ""
                }`}
                onClick={() => handleSizeClick("L")}
              >
                L
              </button>
              <button
                className={`border px-3 py-1 md:px-4 md:py-2 rounded-md hover:scale-105 hover:transition ${
                  selectedSize === "XL" ? "bg-magenta" : ""
                }`}
                onClick={() => handleSizeClick("XL")}
              >
                XL
              </button>
            </div>
          </div>
          {showSizeError && (
            <p className="text-red-500 text-base font-extrabold">
              Please choose a size.
            </p>
          )}

          <div className="flex items-center space-x-4 mt-4 md:mt-6 p-3">
            <button
              className="border-2 bg-magenta rounded-md px-6 py-3 text-black text-base md:text-xl font-bold hover:scale-105 hover:transition cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="border px-3 py-1 md:px-4 md:py-2 rounded-md cursor-pointer bg-magenta h-10 md:h-14 hover:scale-105 hover:transition ">
              <GoHeart />
            </button>
          </div>

          <div className="mt-6 md:mt-8 border-t-2 pt-6 md:pt-8">
            <h4 className="text-lg md:text-2xl font-semibold py-2 md:py-3">
              Description
            </h4>
            <p className="text-lg md:text-xl leading-loose">{wears.main_des}</p>
          </div>
        </div>
      </div>
      {showAddMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-magenta p-4 rounded-lg shadow-lg text-black font-bold text-lg z-50 justify-center text-">
          Item added to cart
        </div>
      )}

      <div className="related-items-container mt-6 md:mt-8">
        <RelatedItems relatedItems={relatedItems} currentItemId={wears.id} />
      </div>
    </div>
  );
}
