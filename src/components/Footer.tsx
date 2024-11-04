import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-14 px-4 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-50">
      <div className="flex h-fit p-4 flex-col items-stretch md:flex-row justify-between gap-20 md:gap-8">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between gap-6 md:w-1/3 w-full">
          <h2 className="text-lg font-semibold tracking-wide uppercase">
            STORE NAME
          </h2>

          <div className="flex flex-col gap-6">
            <div className="text-sm">
              3252 Winding Wawy, Central Plaza, Willowbrook, CA 90210, United
              States
            </div>

            <div className="font-semibold text-sm">hello@storename.com</div>

            <div className="font-semibold text-sm">+1 234 567 890</div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5">
              <Link href={"http://www.facebook.com/storename"}>
                <Image
                  alt="Facebook Icon"
                  src={"/facebook.png"}
                  height={16}
                  width={16}
                />
              </Link>

              <Link href={"http://www.instagram.com/storename"}>
                <Image
                  alt="Instagram Icon"
                  src={"/instagram.png"}
                  height={16}
                  width={16}
                />
              </Link>
              <Link href={"http://www.youtube.com/storename"}>
                <Image
                  alt="Youtube Icon"
                  src={"/youtube.png"}
                  height={16}
                  width={16}
                />
              </Link>

              <Link href="http://www.x.com/storename">
                <Image alt="x Icon" src={"/x.png"} height={16} width={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="hidden lg:flex justify-between gap-4 w-1/2 h-fit">
          {/* FIRST COLUMN (SHOP) */}
          <div className="w-1/3 flex flex-col gap-6 justify-between">
            <h2 className="uppercase font-semibold">SHOP</h2>
            <ul className="flex flex-col gap-5">
              <Link href={"products/new-arrivals"}>
                <li>New Arrivals</li>
              </Link>

              <Link href={"products/careers"}>
                <li>Accessories</li>
              </Link>

              <Link href={"products/men"}>
                <li>Men</li>
              </Link>

              <Link href={"products/women"}>
                <li>Women</li>
              </Link>

              <Link href={"products/all-products"}>
                <li>All Products</li>
              </Link>
            </ul>
          </div>

          {/* SECOND COLUMN (HELP) */}
          <div className="w-1/3 flex flex-col gap-6 justify-between h-full">
            <h2 className="uppercase font-semibold">HELP</h2>
            <ul className="flex flex-col gap-5">
              <Link href={"/about-us"}>
                <li>About Us</li>
              </Link>

              <Link href={"/careers"}>
                <li>Careers</li>
              </Link>

              <Link href={"/affiliates"}>
                <li>Affiliates</li>
              </Link>

              <Link href={"/blog"}>
                <li>Blog</li>
              </Link>

              <Link href={"/contact-us"}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          {/* THIRD COLUMN (COMPANY) */}
          <div className="w-1/3 flex flex-col gap-6 justify-between h-full">
            <h2 className="uppercase font-semibold">COMPANY</h2>
            <ul className="flex flex-col gap-5">
              <Link href={"/about-us"}>
                <li>About Us</li>
              </Link>

              <Link href={"/careers"}>
                <li>Careers</li>
              </Link>

              <Link href={"/affiliates"}>
                <li>Affiliates</li>
              </Link>

              <Link href={"/blog"}>
                <li>Blog</li>
              </Link>

              <Link href={"/contact-us"}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-md font-semibold tracking-wide uppercase">
              SUBSCRIBE
            </h2>
            <div className="text-sm">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </div>

            {/* EMAIL ADDRESS FIELD */}
            <div className="flex h-10">
              <input
                className="text-xs p-3 h-full outline-none w-full"
                placeholder="Email address"
              />
              <button className="text-white text-sm bg-red-400 px-5 h-full">
                JOIN
              </button>
            </div>

            {/* PAYMENT ICONS */}
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-sm">Secure Payments</h4>
              <div className="flex gap-4 justify-between">
                <Image
                  alt="discover"
                  src={"/discover.png"}
                  height={16}
                  width={32}
                />
                <Image
                  alt="skrill"
                  src={"/skrill.png"}
                  height={16}
                  width={32}
                />
                <Image
                  alt="paypal icon"
                  src={"/paypal.png"}
                  height={16}
                  width={32}
                />
                <Image
                  alt="mastercard icon"
                  src={"/mastercard.png"}
                  height={16}
                  width={32}
                />
                <Image
                  alt="visa icon"
                  src={"/visa.png"}
                  height={16}
                  width={32}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
