import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="relative m-auto max-w-[1400px]">
      <div>
        <Image
          className="m-auto h-auto w-[700px] md:w-[1400px]"
          src="/bannerbackground.png"
          alt="Banner Image"
          width={600}
          height={299}
        />
      </div>
      <div className="absolute right-1 top-1/2 flex w-2/4 -translate-x-[15%] -translate-y-1/2 flex-col gap-1 rounded-md bg-[#FFF3E3] p-4 text-sm md:text-lg">
        <h1>New Arrival!</h1>
        <h2 className="text-xl font-bold text-[#B88E2F] md:text-2xl">
          Discover Our New Colection{" "}
        </h2>
        <p className="hidden text-pretty text-justify md:inline">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error natus
          iste optio, a corrupti magnam eius, nam eum quidem reiciendis qui
          voluptatibus, amet voluptatem tempora dicta? Exercitationem, modi
          quia.
        </p>
        <Link
          href={"/shop"}
          className="h-1/4 w-2/3 bg-[#B88E2F] p-[1rem] text-center text-white md:w-1/2"
        >
          BUY NOW
        </Link>
      </div>
    </div>
  );
}
