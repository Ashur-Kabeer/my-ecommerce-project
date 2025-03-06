'use client'
import { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "https://www.livingandhome.co.uk/cdn/shop/files/lQDPKH9_QQoD9PHNAkfNBXiwj7QXbYGVZ58F4JNs8Gv6AA_1400_583_1024x1024_crop_center.jpg?v=1710491422",
    "/asset/image1.png.png",
    "https://th.bing.com/th/id/R.0d08b2b78f56ac087f95ea9232b7a07b?rik=sZ9UTS11ZN803Q&pid=ImgRaw&r=0&sres=1&sresct=1",
    "/asset/image2.jpg",
    "https://skygarden2.azureedge.net/media/original_images/Homepage_banner_2-1_1.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slides every 3 seconds

    // Cleanup the interval when the component is unmounted or when interval is no longer needed
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="relative w-full max-w-screen-full mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-[300px] md:h-[400px]">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300"
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300"
        >
          &#8250;
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              currentIndex === index ? "bg-indigo-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
