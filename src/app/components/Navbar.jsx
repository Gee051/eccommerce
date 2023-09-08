"use client";
import '../globals.css'
import React, { useState, useEffect } from "react";
import { cartState } from "../cartState/page";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu, FiX } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { useRecoilState } from "recoil";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [ cartItem ] = useRecoilState(cartState)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="overflow-x-hidden">
      <div
        className={`w-full h-24 border-b-[1px] fixed top-0 left-0 border-gray-500 gap-2 px-4 shadow-lg  ${
          scrolling ? "bg-white text-black" : "bg-black text-white"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="w-full h-full mx-auto px-2 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Niggiwears"
              width={250}
              height={50}
            />
          </Link>

          <ul className="hidden xl:inline-flex items-center gap-8 uppercase text-sm font-semibold">
            <li className="text-base font-bold">
              <Link href="/">HOME</Link>
            </li>

            <li className="relative group">
              <Link
                href="/cloth"
                className="text-base font-bold cursor-pointer"
              >
                Clothing
              </Link>
              <div className="absolute hidden group-hover:block mt-1 bg-white border w-64 text-xl font-semibold lowercase border-gray-300 rounded-xl">
                <ul className="py-2">
                  <li>
                    <Link href="/cloth/shirt">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Shirts
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Vests
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Pants/Trousers
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Shorts
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Bratops
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <Link
                href="/cloth"
                className="text-base font-bold cursor-pointer"
              >
                FOOTWEARS
              </Link>
              <div className="absolute hidden group-hover:block mt-1 bg-white border w-64 text-xl font-semibold lowercase border-gray-300 rounded-xl">
                <ul className="py-2">
                  <li>
                    <Link href="/cloth/slides">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Slides
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Shoes
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Socks
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Crocs
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <Link
                href="/cloth"
                className="text-base font-bold cursor-pointer"
              >
                ACCESSORIES
              </Link>
              <div className="absolute hidden group-hover:block mt-1 bg-white border w-64 text-xl font-semibold lowercase border-gray-300 rounded-xl">
                <ul className="py-2">
                  <li>
                    <Link href="/cloth/shirt">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Wristband
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Armband
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloth/vest">
                      <div className="block px-4 py-2 text-gray-800 hover:text-magenta cursor-pointer">
                        Arm Sleeve
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="hidden xl:inline-flex gap-8 items-center">
            <div className="flex m-2">
              <input
                type="text"
                id="searchInput"
                placeholder="Search"
                className="border-2 border-magenta rounded-md focus:outline-none shadow-md transition duration-300 w-65 h-10 text-black text-lg font-medium p-3"
              />
              <button className="bg-magenta text-white px-4 py-2 rounded-md cursor-pointer shadow-md transition duration-300 h-10">
                <BsSearch />
              </button>
            </div>
            <button className="relative hover:scale-105 hover:transition cursor-pointer">
              <Link href="/cart">
                <ImCart className="text-3xl" />
                <span className="w-5 h-5 bg-magenta text-white font-black rounded-full absolute left-4 bottom-3 text-xs flex items-center text-center justify-center">
                  {cartItem.length}
                </span>
              </Link>
            </button>
            <div className="relative hover:scale-105 hover:transition cursor-pointer">
              <Link href="/fav">
                <GoHeart className="text-2xl" />
              </Link>
            </div>
            <button
              className={`w-36 h-12 uppercase text-center font-bold text-sm rounded-md px-4 hover:bg-magenta py-2 items-end hover:scale-105 hover:transition cursor-pointer ${
                scrolling
                  ? "bg-gradient-to-r from-purple-500 to-magenta text-white"
                  : "bg-white text-black"
              }`}
            >
              <Link href="/signup">Get Started</Link>
            </button>
          </div>
          <div
            className={`xl:hidden ${
              isMenuOpen ? "hidden" : "block"
            } cursor-pointer`}
            onClick={toggleMenu}
          
            
          >
            <FiMenu className="text-3xl" />
          </div>

          <div
            className={`fixed top-0 right-0 h-90 w-64 shadow-md transition-transform transform  text-white bg-black rounded-lg ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } xl:hidden`} 
          >
            <div className="p-4 border-b border-gray-300 rounded-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Menu</h2>
                <div className="text-xl cursor-pointer" onClick={toggleMenu}>
                  <FiX />
                </div>
              </div>
            </div>
            <ul className="p-4 font-bold items-center text-lg relative">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/cloth">Clothing</Link>
              </li>
              <li>
                <Link href="/foot">FOOTWEARS</Link>
              </li>
              <li>
                <Link href="/access">ACCESSORIES</Link>
              </li>
            </ul>
            <button className="w-35 h-12 bg-white text-black uppercase text-center font-bold rounded-md hover:bg-magenta hover:text-white m-4 p-4 py-2 items-end">
              <Link href="/signup">Get Started</Link>
            </button>
          </div>
        </div>
      </div>


      <div className="h-16 pt-24 w-full text-white flex items-center justify-center xl:hidden border-b-[1px] border-gray-500 gap-2 px-4 shadow-lg ">
        <div className="flex pt-28 gap-3 py-4 items-center">
          <button className="relative hover:scale-105 hover:transition cursor-pointer">
            <Link href="/fav">
              <GoHeart className="text-xl" />
            </Link>
          </button>
          <div className="flex m-2">
            <input
              type="text"
              id="searchInput"
              placeholder="Search"
              className="border-2 border-magenta rounded-md focus:outline-none shadow-md transition duration-300 w-56 h-10 text-black text-base font-medium p-3 md:w-80"
            />
            <button className="bg-magenta text-white px-2 py-2 rounded-md cursor-pointer shadow-md transition duration-300 h-10">
              <BsSearch />
            </button>
          </div>
          <button className="relative hover:scale-105 hover:transition cursor-pointer">
            <Link href="/cart">
              <ImCart className="text-xl" />
              <span className="w-5 h-5 bg-magenta text-white font-black rounded-full absolute left-4 bottom-3 text-xs flex items-center text-center justify-center ">
                {cartItem.length}
              </span>
            </Link>
          </button>
        </div>
      </div>
      <div className="pt-20 h-48 md:pt-28 bg-black w-full text-white text-center flex items-center justify-center">
        <p className="p-3 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white ">
          Want to get wears from big brands? you are low on cash? Niggiwears is
          here for you
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
    