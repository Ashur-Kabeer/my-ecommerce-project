'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";  // Ensure you're using next/navigation
import Link from "next/link";

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [isClient, setIsClient] = useState(false); // State to track if it's client-side
  const router = useRouter(); // This is the next/navigation hook

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart') || '[]'; // Default to '[]' if null
      const cart = JSON.parse(storedCart);
      setCartItems(cart);
    }
  }, []);

  const handlePromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(0.1); // Apply 10% discount
    } else {
      setDiscount(0); // Invalid code
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountedPrice = totalPrice - totalPrice * discount;

  const handleProceedToPayment = () => {
    // Handle actual checkout process, such as payment gateway integration
    router.push("/confirmation"); // Navigate to the confirmation page
  };

  // If it's not client-side yet, don't render anything
  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-2 py-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 flex">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-bold text-indigo-600">{item.price} x {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display Total Price */}
      <div className="mt-6">
        <p className="text-xl font-bold">Total: AED {discountedPrice.toFixed(2)}</p>

        {/* Promo Code Section */}
        <div className="mt-4">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="w-46 p-2 rounded-md border-2 border-gray-300 focus:border-indigo-600"
          />
          <button
            onClick={handlePromoCode}
            className="ml-2 bg-indigo-600 text-white py-1 px-3 rounded-md hover:bg-indigo-700"
          >
            Apply
          </button>
        </div>

        {/* Proceed to Payment Button */}
        <button
          onClick={() => window.location.href="/Payment"}
          className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
        >
          Proceed to Payment
        </button>
      </div>

      {/* Link back to the cart */}
      <Link href="/CartPage">
        <span className="mt-4 block text-center text-indigo-600">Back to Cart</span>
      </Link>
    </div>
  );
};

export default CheckoutPage;
