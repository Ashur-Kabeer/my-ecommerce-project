// pages/Payment.js
'use client'
import React, { useState } from 'react';
import Link from "next/link";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'cod'

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full sm:flex-row p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Checkout</h2>

        <form className="mt-6 space-y-6">
          {/* Payment Method Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-600">Payment Method</h3>
            <div className="flex items-center">
              <input
                id="card"
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="card" className="ml-2 text-gray-700">Credit / Debit Card</label>
            </div>
            <div className="flex items-center">
              <input
                id="cod"
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="cod" className="ml-2 text-gray-700">Cash on Delivery</label>
            </div>
          </div>

          {/* Conditional Form for Card Payment */}
          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="cardNumber" className="text-gray-600 font-medium">Card Number</label>
                <input
                  id="cardNumber"
                  type="text"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="1234 5678 9101 1121"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="flex flex-col sm:w-1/2">
                  <label htmlFor="expiry" className="text-gray-600 font-medium">Expiry Date</label>
                  <input
                    id="expiry"
                    type="text"
                    className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div className="flex flex-col sm:w-1/2">
                  <label htmlFor="cvv" className="text-gray-600 font-medium">CVV</label>
                  <input
                    id="cvv"
                    type="text"
                    className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="CVV"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Conditional Form for Cash on Delivery */}
          {paymentMethod === 'cod' && (
            <div className="space-y-4">
              <p className="text-gray-600">You will pay in cash upon receiving the order.</p>
            </div>
          )}

          {/* Shipping Address Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-600">Shipping Address</h3>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 font-medium">Name</label>
              <input
                id="name"
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="text-gray-600 font-medium">Shipping Address</label>
              <input
                id="address"
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="1234 Main St"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-600 font-medium">City</label>
              <input
                id="city"
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="City"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex flex-col sm:w-1/2">
                <label htmlFor="state" className="text-gray-600 font-medium">State</label>
                <input
                  id="state"
                  type="text"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="State"
                  required
                />
              </div>

              <div className="flex flex-col sm:w-1/2">
                <label htmlFor="zip" className="text-gray-600 font-medium">ZIP Code</label>
                <input
                  id="zip"
                  type="text"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="ZIP"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-96 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Confirm Payment
            </button>
          </div>
          {/* Link back to the cart */}
          <div>
      <Link href="/CartPage">
        <span className="mt-4 block text-center text-indigo-600">Back to Cart</span>
      </Link>
      </div>
    
        </form>
      </div>
    </div>
  );
};

export default Payment;
