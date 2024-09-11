import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "~/server/db/schema";
//import { productProps } from "@/util/lib";

export default function ProductCard(product: Product) {
  return (
    <div className="group relative flex">
      <div className="w-[285px]">
        <Image
          src={product.image}
          width={285}
          height={446}
          alt={product.name}
        />
        <div className="bg-gray-100 p-4">
          <div className="text-2xl font-semibold">{product.name}</div>
          <div className="text-[#898989]">{product.category.title}</div>
          <div className="text-xl font-semibold">{product.price}$</div>
        </div>
      </div>
      <div className="absolute -bottom-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/30 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100 group-active:bottom-0 group-active:opacity-100">
        <button className="border-2 bg-white px-6 py-2 font-semibold text-[#B88E2F]">
          Add To Cart
        </button>
        <ul className="flex gap-4 text-white">
          <li className="flex">
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </div>
  );
}
