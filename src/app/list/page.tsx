import React from "react";
import Filter from "@/components/Filter";
import ButtonBanner from "@/components/ButtonBanner";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* TOP BANNER WITH BUTTON */}
      <ButtonBanner />

      {/* FILTER AND SORTING */}
      <Filter />

      <div className="capitalize text-2xl font-semibold my-3 ">
        {searchParams.cat} For You!
      </div>

      <ProductList
        categoryId={
          cat.collection?._id || "00000000-000000-000000-000000000001"
        }
        searchParams={searchParams}
      />
    </div>
  );
};

export default ListPage;
