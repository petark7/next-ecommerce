import React from "react";

const CustomizeProduct = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* PRICING */}
      <div className="font-semibold text-2xl">
        <span className="text-xl text-gray-400 line-through pr-4">$45</span>
        $40
      </div>

      {/* COLORS */}
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold text-sm">Choose a Color</h4>
        <div className="flex gap-2">
          {/* SELECTED: */}
          <div className="flex items-center justify-center bg-white ring ring-red-300 rounded-full p-[3px]">
            <button className="bg-black p-4 rounded-full ring-1 ring-gray-300" />
          </div>

          <div className="flex items-center justify-center bg-white rounded-full p-[3px]">
            <button className="bg-red-400 p-4 rounded-full ring-1 ring-gray-300" />
          </div>

          <div className="relative cursor-pointer">
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-400 h-[2px] w-full rotate-45"></div>
            </div> */}
            <button className="bg-green-400 ring-1 ring-gray-300 p-4 rounded-full" />
          </div>

          {/* DISABLED: */}
          <div className="relative cursor-not-allowed">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-400 h-[2px] w-full rotate-45"></div>
            </div>
            <button className="bg-white ring-1 ring-gray-300 p-4 rounded-full" />
          </div>
        </div>
      </div>

      {/* SIZES */}
      <div className="flex flex-col gap-6">
        <h4 className="font-semibold text-sm">Choose a Size</h4>
        <div className="flex gap-3">
          <button className="rounded-md outline outline-1 outline-red-400 hover:bg-red-400 hover:text-white px-4 py-1 text-red-400">
            Large
          </button>

          <button className="rounded-md outline outline-1 outline-red-400 hover:bg-red-400 hover:text-white px-4 py-1 text-red-400">
            Medium
          </button>

          <button className="rounded-md outline outline-1 outline-red-400 hover:bg-red-400 hover:text-white px-4 py-1 text-red-400">
            Small
          </button>
        </div>
      </div>

      {/* QUANTITY */}
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold text-sm">Choose a Quantity</h4>

        {/* QUANTITY PICKER: */}
        <div className="flex justify-between">
          <div className="flex items-center justify-between rounded-full bg-gray-100 w-28 ">
            <button className="pr-2 flex items-center justify-end h-full w-1/3  rounded-l-full">
              -
            </button>
            <div className="flex items-center justify-center w-2/3 h-full text-sm">
              1
            </div>
            <button className="pl-2 flex items-center justify-start h-full w-1/3">
              +
            </button>
          </div>
          <button className="text-white text-sm font-semibold bg-red-400 rounded-full px-6 py-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeProduct;
