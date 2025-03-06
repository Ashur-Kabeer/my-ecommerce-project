'use client';

import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-green-500 text-white py-2">
      {/* Wrapper for the marquee */}
      <div className="overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex items-center space-x-8">
          <div className="flex-shrink-0">🔥 Limited Time Offer: 20% OFF on All Items!</div>
          <div className="flex-shrink-0">🚚 Free Shipping on Orders Above AED 100</div>
          <div className="flex-shrink-0">🎉 New Arrivals! Check Out Our Latest Collection</div>
          <div className="flex-shrink-0">💳 Secure Checkout and Multiple Payment Options</div>
          <div className="flex-shrink-0">🎁 Exclusive Deals Just for You</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
