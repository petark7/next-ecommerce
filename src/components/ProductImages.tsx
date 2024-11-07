"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ images }: { images: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="sticky top-0 flex flex-col gap-5">
      {/* MAIN IMAGE */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          className="object-cover rounded-md"
          fill
          src={images[index].image.url}
          alt=""
        />
      </div>

      {/* BOTTOM IMAGES */}
      <div className="flex justify-start gap-5">
        {images.map((product: any, index: number) => {
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
                src={images[index].image.url}
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
