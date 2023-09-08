import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { cartState } from "../cartState/page";
import { useRecoilState } from "recoil";

const Cartlist = ({ data, updateQuantity,  initialSelectedSize  }) => {
  const { category, title, images, price, } = data;

  
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(initialSelectedSize || "m");

  const sizes = ["xs", "s", "m", "l", "xl"];
  const quantity = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setSelectedQuantity(newQuantity);
    updateQuantity(data.id, newQuantity);
  };

  const [cart, setCart] = useRecoilState(cartState);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const calculateItemTotal = () => {
    const formattedPrice = price.replace(/[,;]/g, "");
    const itemTotal = parseFloat(formattedPrice) * selectedQuantity;
    return itemTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="w-full flex items-start p-4">
      <div className="shadow-lg rounded p-4 w-full sm:w-[750px] flex flex-col sm:flex-row sm:gap-2">

        <div className="flex-shrink-0 sm:w-44">
          <img src={images} alt="image" className="h-48 w-full object-contain" />
        </div>

        <div className="flex-grow">
          <h2 className="text-lg font-semibold hover:text-magenta uppercase">
            {category}
          </h2>
          <p className="text-lg font-semibold hover:text-magenta">{title}</p>

          <div className="flex items-center text-base font-semibold space-x-2 p-2">
            <label htmlFor="size">Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value)}
              className="border rounded px-2 py-1"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center text-base font-semibold mb-3 space-x-2">
            <label htmlFor="quantity">Qty:</label>
            <select
              id="quantity"
              value={selectedQuantity}
              onChange={handleQuantityChange}
              className="border rounded px-2 py-1"
            >
              {quantity.map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col text-xl gap-2 items-end">
          <div className="flex gap-3">
            <button className="hover:text-magenta hover:scale-105 hover:transition cursor-pointer ">
              <GoHeart />
            </button>
            <button
              className="hover:text-magenta hover:scale-105 hover:transition cursor-pointer"
              onClick={() => handleRemoveItem(data.id)}
            >
              <RiDeleteBinLine />
            </button>
          </div>
          <div className="font-bold text-xl">
            ₦{calculateItemTotal()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartlist;
