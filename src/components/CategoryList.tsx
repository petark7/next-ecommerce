import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-8 overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          className="w-[270px] flex-shrink-0"
          href={'/category?name="boots"'}
        >
          <div className="flex flex-col gap-4 ">
            <div className="relative bg-slate-100 w-full h-[270px] ">
              <Image
                className="rounded-xl object-cover"
                fill
                alt="Product"
                src={
                  "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>

            <h1 className="tracking-wide text-xl font-light ">Category Name</h1>
          </div>
        </Link>
        <Link
          className="w-[270px] flex-shrink-0"
          href={'/category?name="boots"'}
        >
          <div className="flex flex-col gap-4 ">
            <div className="relative bg-slate-100 w-full h-[270px] ">
              <Image
                className="rounded-xl object-cover"
                fill
                alt="Product"
                src={
                  "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>

            <h1 className="tracking-wide text-xl font-light ">Category Name</h1>
          </div>
        </Link>
        <Link
          className="w-[270px] flex-shrink-0"
          href={'/category?name="boots"'}
        >
          <div className="flex flex-col gap-4 ">
            <div className="relative bg-slate-100 w-full h-[270px] ">
              <Image
                className="rounded-xl object-cover"
                fill
                alt="Product"
                src={
                  "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>

            <h1 className="tracking-wide text-xl font-light ">Category Name</h1>
          </div>
        </Link>
        <Link
          className="w-[270px] flex-shrink-0"
          href={'/category?name="boots"'}
        >
          <div className="flex flex-col gap-4 ">
            <div className="relative bg-slate-100 w-full h-[270px] ">
              <Image
                className="rounded-xl object-cover"
                fill
                alt="Product"
                src={
                  "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>

            <h1 className="tracking-wide text-xl font-light ">Category Name</h1>
          </div>
        </Link>
        <Link
          className="w-[270px] flex-shrink-0"
          href={'/category?name="boots"'}
        >
          <div className="flex flex-col gap-4 ">
            <div className="relative bg-slate-100 w-full h-[270px] ">
              <Image
                className="rounded-xl object-cover"
                fill
                alt="Product"
                src={
                  "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>

            <h1 className="tracking-wide text-xl font-light ">Category Name</h1>
          </div>
        </Link>
        <Link
          className="w-[270px] flex-shrink-0"
          href={'/category?name="boots"'}
        >
          <div className="flex flex-col gap-4 ">
            <div className="relative bg-slate-100 w-full h-[270px] ">
              <Image
                className="rounded-xl object-cover"
                fill
                alt="Product"
                src={
                  "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>

            <h1 className="tracking-wide text-xl font-light ">Category Name</h1>
          </div>
        </Link>
        <Link
          className="w-[270px] flex-shrink-0"
          href={'/category?name="boots"'}
        >
          <div className="flex flex-col gap-4 ">
            <div className="relative bg-slate-100 w-full h-[270px] ">
              <Image
                className="rounded-xl object-cover"
                fill
                alt="Product"
                src={
                  "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>

            <h1 className="tracking-wide text-xl font-light ">Category Name</h1>
          </div>
        </Link>
        <Link
          className="w-[270px] flex-shrink-0"
          href={'/category?name="boots"'}
        >
          <div className="flex flex-col gap-4 ">
            <div className="relative bg-slate-100 w-full h-[270px] ">
              <Image
                className="rounded-xl object-cover"
                fill
                alt="Product"
                src={
                  "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>

            <h1 className="tracking-wide text-xl font-light ">Category Name</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
