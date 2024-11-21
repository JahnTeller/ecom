import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      title: "Bedroom2x",
      imageUrl:
        "https://utfs.io/f/1477be60-7616-40a9-983a-8be8c0a92ee8-3tuwx0.png",
    },
    {
      title: "Bedroom4",
      imageUrl:
        "https://utfs.io/f/1477be60-7616-40a9-983a-8be8c0a92ee8-3tuwx0.png",
    },
    {
      title: "Living",
      imageUrl:
        "https://utfs.io/f/655e3531-871c-488c-abc0-2f0ea943f9ab-eo0av8.png",
    },
    {
      title: "Living",
      imageUrl:
        "https://utfs.io/f/655e3531-871c-488c-abc0-2f0ea943f9ab-eo0av8.png",
    },
  ];
  return (
    <div className="m-auto w-[91%] pt-8">
      <div className="m-auto flex w-[80%] flex-col items-center justify-center pb-5 text-center">
        <h1 className="text-3xl font-bold">Browser The Range</h1>
        <p className="inline-block">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur
        </p>
      </div>
      <nav className="flex gap-2 overflow-auto">
        {dataSet.map((romeCartegory, index) => (
          <Link key={index} href="" className="min-w-[150px]">
            <Image
              src={romeCartegory.imageUrl}
              alt={romeCartegory.title ? romeCartegory.title : ""}
              width={800}
              height={800}
            />
            <div className="text-center">{romeCartegory.title}</div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
