"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function page({ params }: { params: { itemId: string } }) {
  const [quantity, setQuantity] = React.useState(0);
  const [displayImage, setDisplayImage] = React.useState(
    "https://utfs.io/f/60cd0632-2057-4102-9a58-0a807ae33d80-1kc3wl.jpeg",
  );
  const handleImageDisplay = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.id);
    setDisplayImage(e.currentTarget.id);
  };

  return (
    <div>
      <header className="m-auto flex h-[6rem] w-[100%] items-center gap-3 bg-[#F9F1E7] pl-[2rem] text-lg md:pl-[6rem]">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        <div className="font-bold">{">"}</div>
        <Link href="/shop" className="text-gray-500">
          Shop
        </Link>
        <div className="font-bold">{">"}</div>
        <div className="h-[30%] w-[0.1rem] bg-gray-400"></div>
        <div> item title</div>
      </header>
      <div
        aria-label="shop-item-detail"
        className="flex flex-col py-10 lg:flex-row"
      >
        <div
          aria-label="shop-item-detail-image"
          className="flex w-full flex-col"
        >
          <div
            aria-label="shop-item-detail-image-images"
            className="m-auto flex max-w-[92%] items-center justify-center gap-3 py-6 lg:flex-row"
          >
            <button
              onClick={handleImageDisplay}
              id="https://utfs.io/f/60cd0632-2057-4102-9a58-0a807ae33d80-1kc3wl.jpeg"
              className="h-[126px] w-[126px] overflow-hidden rounded-md focus:outline-none focus:ring focus:ring-red-500"
            >
              <Image
                src="https://utfs.io/f/60cd0632-2057-4102-9a58-0a807ae33d80-1kc3wl.jpeg"
                alt=""
                height={500}
                width={500}
                className="rounded-md"
              />
            </button>
            <button
              onClick={handleImageDisplay}
              id="https://utfs.io/f/4fcb4b54-43db-4f50-b720-e55b9d5a7d5c-m0uz47.png"
              className="h-[126px] w-[126px] overflow-hidden rounded-md focus:outline-none focus:ring focus:ring-red-500"
            >
              <Image
                src="https://utfs.io/f/4fcb4b54-43db-4f50-b720-e55b9d5a7d5c-m0uz47.png"
                alt=""
                height={500}
                width={500}
                className="rounded-md"
              />
            </button>
            <button
              onClick={handleImageDisplay}
              id="https://utfs.io/f/1477be60-7616-40a9-983a-8be8c0a92ee8-3tuwx0.png"
              className="h-[126px] w-[126px] overflow-hidden rounded-md focus:outline-none focus:ring focus:ring-red-500"
            >
              <Image
                src="https://utfs.io/f/1477be60-7616-40a9-983a-8be8c0a92ee8-3tuwx0.png"
                alt=""
                height={500}
                width={500}
                className="rounded-md"
              />
            </button>
            <button
              onClick={handleImageDisplay}
              id="https://utfs.io/f/655e3531-871c-488c-abc0-2f0ea943f9ab-eo0av8.png"
              className="h-[126px] w-[126px] overflow-hidden rounded-md focus:outline-none focus:ring focus:ring-red-500"
            >
              <Image
                src="https://utfs.io/f/655e3531-871c-488c-abc0-2f0ea943f9ab-eo0av8.png"
                alt=""
                height={500}
                width={500}
              />
            </button>
          </div>
          <div
            aria-label="shop-item-detail-image-display"
            className="flex-[4] rounded-md p-4"
          >
            <Image
              src={displayImage}
              height={850}
              width={850}
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
        <div
          aria-label="shop-item-detail-info"
          className="m-auto flex w-[90%] flex-col gap-3 px-10 lg:m-0"
        >
          <div className="text-xl">Lorem Ipsum</div>
          <div className="text-gray-400">$1000</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nibh nunc, tempus tempor tempor sed, facilisis vel diam. Aliquam
            iaculis vitae ligula nec congue. Donec nec lectus finibus, facilisis
            lacus nec, lobortis massa. Nulla facilisi. Nullam semper consequat
            purus, eu ultrices nunc pulvinar at. Maecenas.
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <p>Size</p>
              <input type="radio" id="size-S" name="size" value="S" />
              <label
                htmlFor="size-S"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-4 py-2 transition duration-200 ease-in-out hover:bg-gray-300"
              >
                S
              </label>
              <input type="radio" id="size-L" name="size" value="L" />
              <label
                htmlFor="size-L"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-4 py-2 transition duration-200 ease-in-out hover:bg-gray-300"
              >
                L
              </label>
              <input type="radio" id="size-XL" name="size" value="XL" />
              <label
                htmlFor="size-XL"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-4 py-2 transition duration-200 ease-in-out hover:bg-gray-300"
              >
                XL
              </label>
            </div>
            <div className="flex items-center gap-3">
              <p>Color</p>
              <input type="radio" id="color-red" name="color" value="Red" />
              <label
                htmlFor="color-red"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-4 py-2 transition duration-200 ease-in-out hover:bg-red-400"
              >
                Red
              </label>
              <input
                type="radio"
                id="color-yellow"
                name="color"
                value="Yellow"
              />
              <label
                htmlFor="color-yellow"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-4 py-2 transition duration-200 ease-in-out hover:bg-yellow-400"
              >
                Yellow
              </label>
              <input type="radio" id="color-Blue" name="color" value="Blue" />
              <label
                htmlFor="color-Blue"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-4 py-2 transition duration-200 ease-in-out hover:bg-blue-400"
              >
                Blue
              </label>
            </div>
            <div aria-label="shop-item-detail-button" className="flex gap-3">
              <div
                aria-label="shop-item-detail-button-quantity"
                className="flex items-center justify-center rounded-md border border-gray-400"
              >
                <button
                  onClick={(e) => {
                    setQuantity(quantity - 1);
                    e.preventDefault();
                  }}
                  className="p-2 text-3xl"
                >
                  -
                </button>
                <input
                  type="number"
                  className="web w-14 text-center"
                  value={quantity}
                  id="quantity"
                  name="quantity"
                />
                <button
                  onClick={(e) => {
                    setQuantity(quantity + 1);
                    e.preventDefault();
                  }}
                  className="p-2 text-3xl"
                >
                  +
                </button>
              </div>
              <input
                type="submit"
                value="Add To Cart"
                className="rounded-md border border-black p-3"
              />
              <button className="rounded-md border border-black p-3">
                Compare
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
