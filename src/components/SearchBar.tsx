"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("search") as string;

    if (searchTerm) {
      router.push("list?name=" + searchTerm);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-1 items-center justify-between gap-4 rounded-md bg-gray-100 py-2 px-4"
    >
      <input
        className="bg-transparent w-full outline-none"
        type="text"
        name="search"
        placeholder="Search..."
      />
      <button>
        <Image src={"/search.png"} alt="search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
