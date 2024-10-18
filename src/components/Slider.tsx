"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // AUTO SLIDER:

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {/* SLIDES */}
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-screen h-full ${slide.bg} flex flex-col md:flex-row gap-16 `}
          >
            {/* TEXT PART */}
            <div className="h-1/2 md:w-1/2 md:h-full flex flex-col gap-8 justify-center items-center">
              <h2 className="text-xl xl:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl xl:text-8xl text-center font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white text-lg px-4 py-2">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* IMAGE PART */}
            <div className="h-1/2 md:w-1/2 md:h-full relative">
              <Image
                className="object-cover"
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
              />
            </div>
          </div>
        ))}
      </div>

      {/* SLIDE CONTROLLERS */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <div
            onClick={() => setCurrentSlide(index)}
            key={index}
            className={`h-3 w-3 ring-1 rounded-full ring-gray-500 gap-4 cursor-pointer ${
              currentSlide === index
                ? "bg-red-400 scale-125 ring-0"
                : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
