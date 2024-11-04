import { wixClientServer } from "@/lib/wixClientServer";
import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();

  console.log("WORKS", categories);

  return (
    <div className="px-8 overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.items.map((category) => {
          return (
            <Link
              key={category._id}
              className="w-[300px] flex-shrink-0"
              href={`/list?cat=${category.slug}`}
            >
              <div className="flex flex-col gap-4 ">
                <div className="relative bg-slate-100 w-full h-[370px] ">
                  <Image
                    className="object-cover"
                    fill
                    alt="Product"
                    src={category.media?.mainMedia?.image?.url || "cat.png"}
                  />
                </div>

                <h1 className="tracking-wide ">{category.name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
