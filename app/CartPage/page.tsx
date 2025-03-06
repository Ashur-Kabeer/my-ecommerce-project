'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart') || '[]'; // Default to '[]' if null
      const cart = JSON.parse(storedCart);
      setCartItems(cart);
    }
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-screen-xl mx-auto px-2 py-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 flex">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-bold text-indigo-600">{item.price} x {item.quantity}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="mt-4 bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6">
          {/* Display the total price before the checkout button */}
          <p className="text-xl font-bold">Total: AED {totalPrice}</p>


          {/* Checkout Button */}
          <button onClick={() => window.location.href = '/Checkout'} className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      )}

      {/* Link to continue shopping */}
      <Link href="/">
        <span className="mt-4 block text-center text-indigo-600">Continue Shopping</span>
      </Link>
    </div>
  );
};

export default CartPage;
