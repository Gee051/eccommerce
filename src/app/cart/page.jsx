"use client"
import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../cartState/page";
import Cartlist from "../components/CartList";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";


const CartPage = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [processing, setProcessing] = useState(false);
  




  const updateQuantity = (itemId, newQuantity) => {
    setCartItem((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateCartSubtotal = () => {
    const subtotal = cartItem.reduce((total, item) => {
      const formattedPrice = item.price.replace(/[,;]/g, "");
      return total + parseFloat(formattedPrice) * item.quantity;
    }, 0);
    const formattedSubtotal = `₦${subtotal.toLocaleString("en-NG", {
      minimumFractionDigits: 0,
    })}`;
    return formattedSubtotal;
  };


  const createCheckoutSession = async () => {

    axios.post('api/checkout_sessions', { cartItem })
        .then(res => {
            console.log(res)
            window.location = res.data.sessionURL
        })
        .catch(err => console.log(err))
}

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          {cartItem.length <= 0 ? (
            <h1 className="text-center text-4xl mt-32">Your Cart Is Empty</h1>
          ) : (
            cartItem.map((item) => (
              <Cartlist
                key={item.id}
                data={item}
                updateQuantity={updateQuantity}
              />
            ))
          )}
        </div>

        {cartItem.length > 0 && (
          <div className="bg-gray-100 p-4 rounded-3xl h-[300px] m-2">
            <h2 className="text-3xl font-bold mb-2">Cart Summary</h2>
            <hr className="border-gray-400 my-2" />

            <div className="text-base mb-2">
              <div className="flex justify-between text-2xl py-2">
                <span>Subtotal:</span>
                <span className="font-bold">{calculateCartSubtotal()}</span>
              </div>
              <div className="flex justify-between text-2xl py-2">
                <span>Tax:</span>
                <span>₦0.00</span>
              </div>
              <div className="text-gray-600 text-base">
                Delivery fees not included
              </div>
            </div>

            <button
                        className='text-right bg-magenta text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800' onClick={createCheckoutSession}>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
