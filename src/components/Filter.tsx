import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-between items-center">
      <div className="flex gap-3 items-center flex-wrap">
        <div className="bg-gray-200 gap-3 w-fit p-1 rounded-full">
          <select className="bg-gray-200" name="type">
            <option value="">Type</option>
            <option value="type2">Physical</option>
            <option value="type3">Digital</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="min price"
          className="text-sm ring-1 ring-gray-300 px-2 p-1 w-28 rounded-full"
        />

        <input
          type="text"
          placeholder="max price"
          className="text-sm ring-1 ring-gray-300 px-2 p-1 w-28 rounded-full"
        />

        <div className="bg-gray-200 gap-3 w-fit p-1 rounded-full">
          <select className="bg-gray-200" name="type">
            <option value="">Size</option>
            <option value="type2">Physical</option>
            <option value="type3">Digital</option>
          </select>
        </div>

        <div className="bg-gray-200 gap-3 w-fit p-1 rounded-full">
          <select className="bg-gray-200" name="type">
            <option value="">Color</option>
            <option value="type2">Physical</option>
            <option value="type3">Digital</option>
          </select>
        </div>

        <div className="bg-gray-200 gap-3 w-fit p-1 rounded-full">
          <select className="bg-gray-200" name="type">
            <option value="">Category</option>
            <option value="type2">Physical</option>
            <option value="type3">Digital</option>
          </select>
        </div>

        <select
          className="bg-gray-200 gap-3 w-fit p-1 rounded-full"
          name="type"
        >
          <option value="">All Filters</option>
          <option value="type2">Physical</option>
          <option value="type3">Digital</option>
        </select>
      </div>

      {/* RIGHT FILTER PART (sort by) */}
      <div className="w-full md:w-fit">
        <select
          className="ring-1 ring-gray-300 bg-gray-200 bg-transparent p-1 px-2 w-32 rounded-full"
          name="type"
        >
          <option value="">Sort by</option>
          <option value="type2">Physical</option>
          <option value="type3">Digital</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
