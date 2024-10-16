import Image from "next/image";

const CartModal = () => {
  return (
    <div className="flex flex-col gap-8 p-2 w-80">
      <h2 className="text-lg">Shopping Cart</h2>

      {/* cart item */}
      <div className="flex gap-4">
        <Image
          className="rounded-md"
          src={
            "https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="incense"
          width={80}
          height={96}
        />
        <div className=" w-3/4 flex flex-col justify-between">
          {/* Title. Top part */}
          <div>
            <div className="flex justify-between items-center ">
              <h3 className="text-lg font-bold ">Incense</h3>
              <div className="bg-gray-50 rounded-sm p-1">$40.5</div>
            </div>
            <div className="text-gray-500 text-sm">Available</div>
          </div>

          {/* Bottom part */}
          <div className="flex justify-between text-sm">
            <div className="text-gray-500">Qty: 1</div>
            <div className="text-blue-500">Remove</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between font-bold">
          <div className="">Subtotal</div>
          <div>$40.5</div>
        </div>

        {/* Shipping and taxes */}
        <div className="text-sm text-gray-500 w-full">
          Shipping and taxes calculated at checkout.
        </div>

        {/* Buttons */}
        <div className="flex justify-between text-sm">
          <button className="p-4 px-5 ring-1 ring-gray-400 rounded-lg">
            View Cart
          </button>
          <button className="bg-slate-800 p-4 px-5 text-white rounded-lg">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
