import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {/* SLIDES */}
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
