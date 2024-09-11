import React from "react";
import Image from "next/image";
import Logo from "@/components/logo";
import Link from "next/link";
import FirstLetterCapital from "@/util/util";
import { heroProps } from "@/util/lib";

export default function Hero({ page, path }: heroProps) {
  return (
    <div className="flex h-[15rem] w-full flex-col items-center justify-center space-y-2 bg-[url(/background-title.png)]">
      <Logo />
      <h1 className="text-5xl font-extrabold">{FirstLetterCapital(page)}</h1>
      <div className="flex font-bold">
        <Link href="/#">Home </Link>
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
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <div className="font-normal">{FirstLetterCapital(path)}</div>
      </div>
    </div>
  );
}
