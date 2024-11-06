import Image from "next/image";
import React from "react";

const ButtonBanner = () => {
  return (
    <div className="bg-pink-100 h-56">
      <div className="flex justify-around items-center h-full">
        <div className="flex flex-col gap-3 items-start p-6 h-full justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
            Grab up to 50% off on on Selected Products
          </h1>

          <button className="bg-red-400 py-2 px-4 text-white text-sm rounded-full hover:shadow-md transition-shadow duration-200">
            Buy Now
          </button>
        </div>

        <div className="relative w-[350px] md:w-[200px] h-full flex items-center">
          <Image fill alt="Girl with headphones" src={"/woman.png"} />
        </div>
      </div>
    </div>
  );
};

export default ButtonBanner;
