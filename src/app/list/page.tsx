import React from "react";
import Filter from "@/components/Filter";
import ButtonBanner from "@/components/ButtonBanner";
import ProductList from "@/components/ProductList";

const ListPage = ({ searchParams }: { searchParams: any }) => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* TOP BANNER WITH BUTTON */}
      <ButtonBanner />
      {/* FILTER AND SORTING */}
      <Filter />

      <div className="capitalize text-xl font-semibold mb-12 ">
        {searchParams.cat} For You!
      </div>
      <ProductList categoryId="22172118-b003-66f4-6c05-69b1cf7297ea" />
    </div>
  );
};

export default ListPage;
