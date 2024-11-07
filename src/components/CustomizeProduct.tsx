import React from "react";

const CustomizeProduct = ({ productOptions }: { productOptions: any }) => {
  return (
    <div className="flex flex-col gap-5">
      {/* COLORS */}
      {productOptions.map((option: any) => {
        return (
          <div key={option.optionType} className="flex gap-3">
            {option?.choices?.map((choice: any, index: any) => {
              return (
                <div key={index}>
                  <div className="flex items-center justify-center bg-white rounded-full p-[3px]">
                    <button
                      className={`bg-red-400 p-4 rounded-full ring-1 ring-gray-300`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

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
