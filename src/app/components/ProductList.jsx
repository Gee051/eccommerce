"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ImCart } from "react-icons/im";
import { GoHeart } from "react-icons/go";
import Link from "next/link";
import { BiSolidSortAlt } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { cartState } from "../cartState/page";


const ProductList = ({ products, category }) => {
  const [hoveredWearIndex, setHoveredWearIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [showAddMessage, setShowAddMessage] = useState(false); 
  const [addedItems, setAddedItems] = useState([]); 
  

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItem.findIndex(item => item.id === product.id);
  
    if (existingItemIndex === -1) {
      setCartItem(prevState => [...prevState, { ...product, quantity: 1 }]);
      setAddedItems([...addedItems, product.id]);
      setShowAddMessage(true); 
      setTimeout(() => {
        setShowAddMessage(false); 
      }, 600);
    } else {
      // setCartItem(prevState => {
      //   return prevState.map((item) => {
      //     return item.id === product.id ? {...item, quantity: item.quantity + 1} : item 
      //   })
      // })
    }
    
  };


  

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };


    const handleSortByClick = (sortOption) => {
      setSortBy(sortOption);
    };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") {
      return true;
    }
    return product.category === selectedCategory;
  });

  if (sortBy === "lowToHigh") {
    filteredProducts.sort(
      (a, b) =>
        parseFloat(a.price.replace(",", "")) -
        parseFloat(b.price.replace(",", ""))
    );
  } else if (sortBy === "highToLow") {
    filteredProducts.sort(
      (a, b) =>
        parseFloat(b.price.replace(",", "")) -
        parseFloat(a.price.replace(",", ""))
    );
  }

  return (
    <div className="relative pt-9 ">
      <div className="flex md:w-full h-20  bg-white pt-4 p-2 rounded-lg mb-4 justify-between shadow-lg sticky top-24 border "
       style={{ zIndex: 90 }}>
        <button
          className={`xl:hidden ${
            isMenuOpen ? "hidden" : "block"
          } cursor-pointer`}
          onClick={toggleMenu}
        >
          <BiSolidSortAlt className="text-3xl" />
        </button>
        <div className=" hidden xl:inline-flex space-x-6 px-2 ">
          <button
            onClick={() => handleCategoryClick("All")}
            className={`text-black hover:text-magenta ${
              selectedCategory === "All" ? "font-bold" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryClick("nike")
          }
            className={`text-black hover:text-magenta ${
              selectedCategory === "nike" ? "font-bold" : ""
            }`}
          >
            Nike
          </button>
          <button
            onClick={() => handleCategoryClick("adidas")}
            className={`text-black hover:text-magenta ${
              selectedCategory === "adidas" ? "font-bold" : ""
            }`}
          >
            Adidas
          </button>
          <button
            onClick={() => handleCategoryClick("puma")}
            className={`text-black hover:text-magenta ${
              selectedCategory === "puma" ? "font-bold" : ""
            }`}
          >
            Puma
          </button>
        </div>
        <div
          className={` absolute z-40 left-0 h-96 w-64 p-3 shadow-md transition-transform transform text-black bg-white rounded-lg ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } xl:hidden`}
        >
          <div className="p-4 border-b border-gray-300 rounded-lg left-0">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Filter </h2>
              <button className="text-xl cursor-pointer " onClick={toggleMenu}>
                <FiX />
              </button>
            </div>
          </div>
          <div className="flex gap-2 flex-col items-start p-4 ">
            <button
              onClick={() => handleCategoryClick("All")}
              className={`text-black hover:text-magenta ${
                selectedCategory === "All" ? "font-bold" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleCategoryClick("nike")}
              className={`text-black hover:text-magenta ${
                selectedCategory === "nike" ? "font-bold" : ""
              }`}
            >
              Nike
            </button>
            <button
              onClick={() => handleCategoryClick("adidas")}
              className={`text-black hover:text-magenta ${
                selectedCategory === "adidas" ? "font-bold" : ""
              }`}
            >
              Adidas
            </button>
            <button
              onClick={() => handleCategoryClick("puma")}
              className={`text-black hover:text-magenta ${
                selectedCategory === "puma" ? "font-bold" : ""
              }`}
            >
              Puma
            </button>
            <button
              onClick={() => handleSortByClick("lowToHigh")}
              className={`text-black text-xl hover:text-magenta ${
                sortBy === "lowToHigh" ? "font-bold" : ""
              }`}
            >
              Prices Low to High
            </button>
            <button
              onClick={() => handleSortByClick("highToLow")}
              className={`text-black text-xl hover:text-magenta ${
                sortBy === "highToLow" ? "font-bold" : ""
              }`}
            >
              Prices High to Low
            </button>
          </div>
        </div>

        <div className="hidden xl:inline-flex relative  items-center space-x-2">
          <span className="text-lg font-semibold">Filter by Price:</span>
          <select
            value={sortBy}
            onChange={(e) => handleSortByClick(e.target.value)}
            className="block mt-1 pl-3 pr-10 py-2  border-black focus:ring-magenta focus:border-magenta sm:text-base rounded-md"
            style={{
              width: "180px",
              height: "50px",
              border: "1px solid black",
            }}
          >
            <option value="">Select</option>
            <option value="lowToHigh" className="text-lg">
              Low to High
            </option>
            <option value="highToLow" className="text-lg">
              High to Low
            </option>
          </select>
        </div>
      </div>

      <div className=" md:w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index ) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 m-4 shadow-md flex flex-col justify-between image-container relative"
              onMouseEnter={() => setHoveredWearIndex(index)}
              onMouseLeave={() => setHoveredWearIndex(null)}
            >
              <Link href={`/${category}/${product.id}`}>
                <div className="border-b pb-2">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="object-contain w-64 h-72 cursor-pointer rounded-t-lg"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold mb-1 hover:text-magenta">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{product.description}</p>
                  <p className="text-[#286f6b] text-lg">₦{product.price}</p>
                </div>
              </Link>
              <div
                className={`absolute top-0 right-0 mt-2 mr-2 flex flex-col items-center space-y-2 icon-container ${
                  hoveredWearIndex === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
                style={{
                  transform: `translateX(${
                    hoveredWearIndex === index ? "0" : "100%"
                  })`,
                  transition:
                    "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                }}
              >
                <button
                  className={`p-2 bg-white shadow-md rounded hover:bg-magenta`}
                  onClick={() => handleAddToCart(product)}
                  disabled={addedItems.includes(product.id)}
                  title={
                    addedItems.includes(product.id)
                      ? "Item already in cart"
                      : "Add to Cart"
                  }
                >
                  <ImCart />
                </button>
                <button className="p-2 bg-white shadow-md rounded hover:bg-magenta">
                  <GoHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAddMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-magenta p-4 rounded-lg shadow-lg text-black font-bold text-lg">
          Item added to cart
        </div>
      )}
    </div>
  );
};

export default ProductList;
