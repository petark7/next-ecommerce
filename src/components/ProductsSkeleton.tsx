import React from "react";

const ProductsSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative h-72 w-full"></div>

      <div className="w-full bg-gray-50"></div>

      <div className="rounded-2xl ring-1 ring-red-400 text-red-400 w-fit p-3 px-4 hover:bg-red-400 hover:text-white transition-colors duration-150">
        Add to cart
      </div>
    </div>
  );
};

export default ProductsSkeleton;
