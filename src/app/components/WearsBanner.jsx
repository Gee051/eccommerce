import React, { useState, useEffect } from "react";
import Image from "next/image";

const TypingImageBanner = ({ imagePath, title, description, containerHeight }) => {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex < title.length + description.length) {
      const timeoutId = setTimeout(() => {
        if (currentTextIndex < title.length) {
          setTypedTitle((prevTitle) => prevTitle + title[currentTextIndex]);
        } else {
          setTypedDescription((prevDescription) => prevDescription + description[currentTextIndex - title.length]);
        }
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 20);

      return () => clearTimeout(timeoutId);
    }
  }, [currentTextIndex, title, description]);

  return (
    <div className="relative flex overflow-x-hidden" style={{ height: containerHeight }}>
      <div className="flex-1 relative overflow-hidden py-3">
        <Image
          src={imagePath}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-6 md:p-16 lg:p-20 xl:p-24">
          <div className="max-w-lg font-extrabold text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase font-serif">
            {typedTitle}
          </div>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-5 flex-wrap font-bold">
            {typedDescription}
          </p>
          <button className={`group relative bg-transparent text-white p-3 rounded-md m-3 border-magenta border-[3px] cursor-pointer overflow-hidden transition-transform duration-500 ease-in-out hover:border-none hover:shadow-lg hover:text-white shadow-md mt-11 w-48 ${
              typedTitle === title && typedDescription === description
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            } transition-transform duration-500 ease-in-out`}
            href="#"
          >
            <p className="block font-bold text-white hover:text-white relative z-10 bg-transparent"> Shop Now</p>
            <span className="bg-gradient-to-r from-purple-500 to-magenta h-full w-0 absolute left-0 bottom-0 z-0 group-hover:w-full transition-all duration-500 ease-in-out text-white"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypingImageBanner;
