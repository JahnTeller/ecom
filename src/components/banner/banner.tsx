import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="relative flex w-screen items-center justify-center">
      <div className="relative h-[716px] w-[1440px]">
        <Image src="/bannerbackground.png" alt="Banner Image" fill={true} />
        <div className="text-medium absolute right-[5rem] top-1/2 h-[25rem] w-[30rem] -translate-y-1/2 rounded-sm bg-[#FFF3E3] px-8 py-12 font-Poppins">
          <div className="space-y-4 break-normal text-sm font-medium text-black">
            <h1>New Arrival</h1>
            <h2 className="leading-light text-4xl font-bold text-[#B88E2F]">
              Discover Our New Collection
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis.
            </p>
            <button className="h-[75px] w-[222px] bg-[#B88E2F]">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
