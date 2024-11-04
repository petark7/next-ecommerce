"use client";
import Image from "next/image";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 2,
    src: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 3,
    src: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 4,
    src: "https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="sticky top-0 flex flex-col gap-5">
      {/* MAIN IMAGE */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          className="object-cover rounded-md"
          fill
          src={products[index].src}
          alt=""
        />
      </div>

      {/* BOTTOM IMAGES */}
      <div className="flex justify-between gap-5">
        {products.map((product, index) => {
          return (
            <div
              key={product.id}
              className="relative h-24 w-1/4 cursor-pointer"
            >
              <Image
                onClick={() => {
                  setIndex(index);
                }}
                className="object-cover rounded-md"
                fill
                src={products[index].src}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
