import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
