"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="relative flex gap-3 xl:gap-5 items-center">
      <Image
        onClick={() => setIsProfileOpen((prev) => !prev)}
        className="cursor-pointer"
        src={"/profile.png"}
        alt="profile"
        width={22}
        height={22}
      />

      {isProfileOpen && (
        <div className="absolute left-0 top-10 flex flex-col gap-2 bg-white p-4 rounded-md shadow-md z-20">
          <Link onClick={() => setIsProfileOpen(false)} href="/profile">
            Profile
          </Link>
          <div>Logout</div>
        </div>
      )}

      <div
        onClick={() => setIsCartOpen((prev) => !prev)}
        className="relative cursor-pointer"
      >
        <Image src={"/cart.png"} alt="cart" width={22} height={22} />

        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          2
        </div>
        {isCartOpen && (
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute right-0 top-10 flex flex-col gap-2 bg-white p-4 rounded-md shadow-md z-20"
          >
            <CartModal />
          </div>
        )}
      </div>

      <Image
        className="cursor-pointer"
        src={"/notification.png"}
        alt="notification"
        width={22}
        height={22}
      />
    </div>
  );
};

export default NavIcons;
