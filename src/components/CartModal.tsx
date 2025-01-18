import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0px_3px_10px_0px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping cart</h2>
          {/* LIST */}
          {/* ITEM */}
          <div className="flex gap-6">
            <Image
              src="https://images.pexels.com/photos/7120133/pexels-photo-7120133.jpeg"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between">
              {/* TOP */}
              <div className="">
                {/* TITLE */}
                <div className="flex justify-between gap-4 items-center">
                  <h3 className="font-semibold">Product Title</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DISCRIPTION */}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between text-sm ">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          {/* ITEM */}
          <div className="flex gap-6">
            <Image
              src="https://images.pexels.com/photos/7120133/pexels-photo-7120133.jpeg"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between">
              {/* TOP */}
              <div className="">
                {/* TITLE */}
                <div className="flex justify-between gap-4 items-center">
                  <h3 className="font-semibold">Product Title</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DISCRIPTION */}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between text-sm ">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor, sit amet.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 hover:bg-gray-50">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white hover:bg-gray-600">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
