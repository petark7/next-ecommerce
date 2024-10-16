"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer"
        src={"/menu.png"}
        alt="menu"
        width={20}
        height={20}
      />
      {open && (
        <div
          className="absolute bg-black top-20 left-0 w-full h-[calc(100vh-80px)] flex flex-col 
          gap-8 text-white items-center justify-center text-xl"
          onClick={() => setOpen(false)}
        >
          <Link href="/">Home</Link>
          <Link href="/list">Shop</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Menu;
