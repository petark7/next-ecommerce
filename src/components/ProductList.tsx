import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex gap-x-6 gap-y-16 flex-wrap justify-between gap-32">
      <Link
        href={"/product/1"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-72 w-full">
          <Image
            className="absolute rounded-lg object-cover hover:opacity-0 transition-opacity duration-200 z-10"
            src={
              "https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="product"
            sizes="25wv"
            fill
          />

          <Image
            className="absolute rounded-lg object-cover"
            src={
              "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="product"
            sizes="25wv"
            fill
          />
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg">Product Name</h3>
          <p>$100.00</p>
        </div>

        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-fit p-3 px-4 hover:bg-red-400 hover:text-white transition-colors duration-150">
          Add to cart
        </button>
      </Link>

      <Link
        href={"/product/1"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-72 w-full">
          <Image
            className="absolute rounded-lg object-cover hover:opacity-0 transition-opacity duration-200 z-10"
            src={
              "https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="product"
            sizes="25wv"
            fill
          />

          <Image
            className="absolute rounded-lg object-cover"
            src={
              "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="product"
            sizes="25wv"
            fill
          />
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg">Product Name</h3>
          <p>$100.00</p>
        </div>

        <button className="rounded-md ring-1 ring-red-400 text-red-400 w-fit p-3 px-4 hover:bg-red-400 hover:text-white transition-colors duration-150">
          Add to cart
        </button>
      </Link>

      <Link
        href={"/product/1"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-72 w-full">
          <Image
            className="absolute rounded-lg object-cover hover:opacity-0 transition-opacity duration-200 z-10"
            src={
              "https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="product"
            sizes="25wv"
            fill
          />

          <Image
            className="absolute rounded-lg object-cover"
            src={
              "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="product"
            sizes="25wv"
            fill
          />
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg">Product Name</h3>
          <p>$100.00</p>
        </div>

        <button className="rounded-md ring-1 ring-red-400 text-red-400 w-fit p-3 px-4 hover:bg-red-400 hover:text-white transition-colors duration-150">
          Add to cart
        </button>
      </Link>

      <Link
        href={"/product/1"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-72 w-full">
          <Image
            className="absolute rounded-lg object-cover hover:opacity-0 transition-opacity duration-200 z-10"
            src={
              "https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="product"
            sizes="25wv"
            fill
          />

          <Image
            className="absolute rounded-lg object-cover"
            src={
              "https://images.pexels.com/photos/14838905/pexels-photo-14838905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="product"
            sizes="25wv"
            fill
          />
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg">Product Name</h3>
          <p>$100.00</p>
        </div>

        <button className="rounded-md ring-1 ring-red-400 text-red-400 w-fit p-3 px-4 hover:bg-red-400 hover:text-white transition-colors duration-150">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
