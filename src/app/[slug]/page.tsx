import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-4 py-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* IMAGES */}
      <div className="md:w-1/2">
        <ProductImages />
      </div>

      {/* TITLE, DESC & OPTIONS */}
      <div className="md:w-1/2">
        <div className="flex flex-col">
          <h1 className="mb-5 text-3xl font-semibold">Digital incense</h1>
          <div className="text-sm text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0" />

          {/* OPTIONS */}
          <CustomizeProduct />
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0" />

        {/* DETAILED DESCRIPTION, REFUND POLICY AND SHIPPING */}
        <div>
          <div>
            <h4>PRODUCT INFO</h4>
            <div>DESC</div>
          </div>

          <div>
            <h4>PRODUCT INFO</h4>
            <div>DESC</div>
          </div>

          <div>
            <h4>PRODUCT INFO</h4>
            <div>DESC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
