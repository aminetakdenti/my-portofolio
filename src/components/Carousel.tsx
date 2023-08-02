// src/components/Carousel.js

import { useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";

const images: string[] = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  // Add more image URLs here
];

const Carousel = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState(images);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      const fEle = currentImages.splice(0, 1);
      setCurrentImages([...currentImages, fEle]);
    }, 5000); // 5000ms = 5 seconds (adjust the interval as needed)

    return () => clearInterval(interval);
  }, [currentImages[0]]);

  return (
    <div className="relative h-64 w-full">
      <div className="flex gap-4">
        {currentImages &&
          currentImages.map((img) => (
            <div className="h-full w-full transform transition-all duration-300">
              <img
                className="h-full w-full transition-all duration-300"
                src={img}
                key={img}
                alt={img}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
