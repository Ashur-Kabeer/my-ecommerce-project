// components/LocationBanner.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';

// Define the type for props
interface LocationBannerProps {
  currentLocation: string;
}

const LocationBanner = ({ currentLocation }: LocationBannerProps) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="w-full bg-gray-700 text-white px-2 sm:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Location Text */}
          <span className="text-sm sm:text-md font-semibold">
          📍{currentLocation}
          </span>
        </div>



         <div>
         {/* Link to change location */}
         <Link href="/change-location"
             className="text-sm sm:text-md px-10 font-semibold text-yellow-300 hover:text-yellow-400">
              Change Location
          </Link>

        {/* Close Button */}
        <button
          onClick={handleBannerClose}
          className="text-ms text-black bg-white hover:bg-red-600 px-3 py-1 rounded-full"
        >
          X
        </button>
        </div>
      </div>
    )
  );
};

export default LocationBanner;
