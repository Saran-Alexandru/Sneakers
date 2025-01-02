import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import sneakers_blue from "../assets/sneakers-blue.png";
import sneakers_orange from "../assets/sneakers-orange.png";
import sneakers_yellow from "../assets/sneakers-yellow.png";
import sneakers_green from "../assets/sneakers-green.png";

const ImageSlider = () => {
  const images = [
    sneakers_green,
    sneakers_blue,
    sneakers_orange,
    sneakers_yellow,
  ];

  const colors = ["#76B036", "#7380F1", "#FF9900", "#CBBA4B"];
  const prices = [
    { original: 150, discount: 120 },
    { original: 140, discount: 110 },
    { original: 130, discount: 100 },
    { original: 160, discount: 130 },
  ];

  const titles = [
    "Green Sneaker",
    "Blue Sneaker",
    "Orange Sneaker",
    "Yellow Sneaker",
  ];

  const descriptions = [
    "Comfortable and stylish sneakers for daily wear.",
    "Blue sneakers perfect for both casual and sporty looks.",
    "Bright orange sneakers to add color to your outfit.",
    "Sleek yellow sneakers, designed for comfort and style.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentColor = colors[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Navbar */}
      <Navbar currentColor={currentColor} />

      {/* Slider Container */}
      <div
        className="text-white pt-10 pb-[14rem] px-4 rounded shadow-md slider-container relative lg:w-[508px] w-full lg:h-[681px] h-[489px] sm:ml-[115px] sm:mt-[26px]"
        style={{
          backgroundColor: currentColor,
        }}
      >
        {/* Slider Images */}
        <div className="w-full h-auto overflow-hidden relative sm:mt-0 mt-[-26px]">
          <div
            className="slider-images flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-[300px] sm:w-[343px] h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Bullets */}
        <div className="flex justify-center mt-4 sm:mt-[2rem]">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                backgroundColor: colors[index],
                border: "1px solid black",
              }}
              className={`sm:w-[77px] w-[4rem] h-4 rounded-full cursor-pointer transition-all duration-300 mx-2 ${
                currentIndex === index ? "scale-110" : "opacity-70"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="sticky flex flex-col justify-center items-start mt-[-152px] ml-[77px] w-[276px] lg:mt-[-245px] lg:ml-[167px] lg:w-[329px] sm:mt-4 sm:ml-4 sm:w-auto sm:px-6">
        {/* Title */}
        <h2 className="text-[25px] sm:text-[25px] font-bold text-[#fff] sm:text-left sm:mb-2">
          {titles[currentIndex]}
        </h2>

        {/* Description */}
        <p className="text-[18px] sm:text-[18px] text-[#ffffffb0] sm:text-left w-[323px]">
          {descriptions[currentIndex]}
        </p>

        {/* Price Section */}
        <div className="flex sm:flex-col flex-row sm:gap-4 gap-5 items-center">
          {/* Prețul */}
          <div className="flex gap-4 sm:gap-5 sm:text-left">
            <p className="text-[27px] text-[#ffffffb0] line-through italic sm:text-[27px]">
              ${prices[currentIndex].original}
            </p>
            <p className="text-[27px] font-bold text-[#fff] sm:text-[27px]">
              ${prices[currentIndex].discount}
            </p>
          </div>

          {/* Buton Buy New */}
          <Link
            to="/products"
            className="sm:flex flex rounded-md bg-[#111827] text-[15px] sm:text-[16px] w-[100px] sm:w-[132px] h-[35px] sm:h-[51px] justify-center items-center font-semibold text-white shadow-sm hover:bg-[#3f4964] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Buy New
          </Link>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
