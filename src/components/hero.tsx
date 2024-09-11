import React from "react";
import Image from "next/image";
import Logo from "~/components/logo";
import Link from "next/link";
import FirstLetterCapital from "~/utils/util";
import RoomCard from "./roomCard";

export default function Hero() {
  const dataSet = [
    {
      title: "Dining",
      imageUrl:
        "https://utfs.io/f/4fcb4b54-43db-4f50-b720-e55b9d5a7d5c-m0uz47.png",
    },
    {
      title: "Living",
      imageUrl:
        "https://utfs.io/f/655e3531-871c-488c-abc0-2f0ea943f9ab-eo0av8.png",
    },
    {
      title: "Bedroom",
      imageUrl:
        "https://utfs.io/f/1477be60-7616-40a9-983a-8be8c0a92ee8-3tuwx0.png",
    },
  ];
  return (
    <div className="relative flex min-h-[40rem] flex-col items-center justify-center gap-10 bg-red-300">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">Browse The Range</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-h-4xl flex max-w-6xl gap-5 overflow-x-scroll px-10">
        {/* {dataSet.map((item) => (
          <RoomCard {...item} />
        ))} */}
        <RoomCard {...dataSet[1]} />
      </div>
    </div>
  );
}
