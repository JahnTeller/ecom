"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dataSet } from "~/utils/data";

export default function Shop() {
  const [count, setCount] = useState<number>(0);
  const [resultdisplay, setResultDisplay] = React.useState(
    dataSet.length > 16 ? 16 : dataSet.length,
  );
  const [dataMap, setDataMap] = React.useState(dataSet.slice(0, 16));
  const [noMoreResult, setNoMoreResult] = React.useState(false);
  function handleClick() {
    if (dataSet.length > 16 * count) {
      console.log(count);
      if (dataSet.length < 16 * (count + 1)) {
        setDataMap(dataSet);
        setResultDisplay(dataSet.length);
        setNoMoreResult(true);
      }
      setCount(count + 1);
      setResultDisplay(dataSet.length * count + 1);
      setDataMap(dataSet.slice(0, 16 + (count + 1) * 16));
    }
  }
  function convertCurrencyToNumber(currencyString: string): number {
    // Remove the dollar sign and any whitespace, then convert to a number
    const numberString = currencyString.replace(/[^0-9.-]+/g, ""); // Remove non-numeric characters
    return Number(numberString); // Convert the cleaned string to a number
  }

  return (
    <div>
      <header className="relative m-auto h-[10rem] w-screen">
        <Image
          fill={true}
          alt="shop-bg-image"
          src="https://utfs.io/f/9LB9Yap3ymNljekvrFTX6cS8ARLPqNHbdv0zeBkJYrUg5yTn"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold">SHOP</div>
          <div className="flex">
            <div className="font-bold">Home {"> "} </div>{" "}
            <div className="font-light">Shop</div>{" "}
          </div>
        </div>
      </header>
      <div
        aria-label="shop-option"
        className="flex items-start justify-between bg-[#F9F1E7] p-4"
      >
        <div
          aria-label="shop-option-left"
          className="flex items-center justify-center gap-2"
        >
          <button className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>{" "}
            filter
          </button>
          <div className="h-10 w-[0.1rem] bg-gray-600"></div>
          <div className="dec">
            Showing {resultdisplay + " "}
            of {dataSet?.length} result
          </div>
        </div>
        <div aria-label="shop-option-right" className="flex gap-3">
          <div
            aria-label="shop-option-right-show"
            className="flex items-center justify-center gap-2"
          ></div>
          <div
            aria-label="shop-option-right-short-by"
            className="flex items-center justify-center gap-2"
          >
            <select className="p-3" defaultValue="Short-by">
              <option value="Short-by">Short By</option>
              <option value="decrease-price">decrease price</option>
              <option value="increase-price">increase price</option>
              <option value="name-a-z">name a-z</option>
              <option value="name-z-a">name z-a</option>
            </select>
          </div>
        </div>
      </div>

      <div aria-label="items-grid" className="m-auto w-[91%] gap-10 pt-8">
        <div
          aria-label="item-box-container"
          className="grid grid-cols-2 items-center justify-center gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {dataMap.map((item, index) => (
            <div className="group relative flex" key={index}>
              <div
                key={index + "item-box"}
                aria-label="item-box"
                className="relative mx-auto flex max-w-[10rem] flex-col items-center justify-center bg-gray-100 md:max-w-[13rem]" // Added mx-auto for centering
              >
                <div
                  aria-label="item-box-discount"
                  className="absolute right-2 top-2 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-red-300 p-3"
                >
                  -{item.discount}%
                </div>
                <Image
                  src={item.imageUrl}
                  height={300}
                  width={300}
                  alt={item.Title}
                />
                <div
                  aria-label="item-box-name"
                  className="text-center font-bold"
                >
                  {item.Title}
                </div>
                <div
                  aria-label="item-box-item-category"
                  className="text-sm text-gray-600"
                >
                  {item.category}
                </div>
                <div aria-label="item-box-price" className="text-sm">
                  <div aria-label="item-box-price-after-discount">
                    $
                    {(
                      convertCurrencyToNumber(item.cost) *
                      (1 - item.discount / 100)
                    ).toFixed(2)}
                  </div>
                  <div
                    aria-label="item-box-init-price"
                    className="text-gray-400 line-through"
                  >
                    {item.cost}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/30 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100 group-active:bottom-0 group-active:opacity-100">
                <button className="border-2 bg-white px-6 py-2 font-semibold text-[#B88E2F]">
                  Add To Cart
                </button>
                <nav className="flex flex-wrap items-center justify-center gap-4 text-white">
                  <Link className="flex" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    Like
                  </Link>

                  <Link className="flex" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Share
                  </Link>

                  <Link href="/comparison" className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                      />
                    </svg>
                    Compare
                  </Link>
                  <Link
                    href={"/shop/" + item.Title}
                    className="flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    Info
                  </Link>
                </nav>
              </div>
            </div>
          ))}
        </div>
      </div>
      {noMoreResult ? (
        <button className="m-auto my-10 flex h-10 items-center justify-center rounded-md bg-[#F9F1E7] p-7 hover:bg-red-600 hover:text-white">
          No More Result
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="m-auto my-10 flex h-10 items-center justify-center rounded-md bg-[#F9F1E7] p-7 hover:bg-[#B88E2F]"
        >
          Show More
        </button>
      )}
    </div>
  );
}
