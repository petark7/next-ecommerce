"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const params = new URLSearchParams(searchParams.toString());

    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };
  // TODO: make custom SELECT & INPUT components to simplify code here
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-between items-center">
      <div className="flex gap-3 items-center flex-wrap">
        <div className="flex items-center justify-center bg-gray-200 gap-3 w-fit p-2 rounded-full">
          <select
            className="bg-gray-200 text-sm"
            name="type"
            onChange={handleFilterChange}
          >
            <option value="">Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
          </select>
        </div>

        <input
          name="minPrice"
          type="text"
          placeholder="min price"
          className="text-sm ring-1 ring-inset ring-gray-300 p-2 w-28 rounded-full"
          onChange={handleFilterChange}
        />

        <input
          name="maxPrice"
          type="text"
          placeholder="max price"
          className="text-sm ring-1 ring-inset ring-gray-300 p-2 w-28 rounded-full"
          onChange={handleFilterChange}
        />

        <div className="flex items-center justify-center bg-gray-200 gap-3 w-fit p-2  rounded-full">
          <select
            className="bg-gray-200 text-sm"
            name="category"
            onChange={handleFilterChange}
          >
            <option value="">Category</option>
            <option value="shoes">Shoes</option>
            <option value="clothes">Clothes</option>
          </select>
        </div>

        <select
          className="bg-gray-200 gap-3 w-fit p-2 rounded-full text-sm"
          name="allFilters"
          onChange={handleFilterChange}
        >
          <option value="">All Filters</option>
          <option value="type2">Physical</option>
          <option value="type3">Digital</option>
        </select>
      </div>

      {/* RIGHT FILTER PART (sort by) */}
      <div className="w-full md:w-fit">
        <select
          className="text-sm ring-1 ring-gray-300 bg-gray-200 bg-transparent p-2 w-32 rounded-full"
          name="sortBy"
          onChange={handleFilterChange}
        >
          <option value="">Sort by</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
