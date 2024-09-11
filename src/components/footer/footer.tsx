import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center border-t-2 md:w-screen md:flex-col md:pt-4">
      <div className="m-16 flex flex-col gap-6 md:mb-10 md:grid md:grid-cols-4 md:border-b-2 md:pb-12">
        <div className="pr-20 md:space-y-4">
          <div>Furniture</div>
          <p className="text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <ul className="flex gap-5 md:flex-col md:gap-0 md:space-y-10">
          <div className="text-[#9F9F9F]">Links</div>
          <li>
            <Link href="/#">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex gap-5 md:flex-col md:gap-0 md:space-y-10">
          <div className="text-[#9F9F9F]">Help</div>
          <li>
            <Link href="/payment-option">Payment Option</Link>
          </li>
          <li>
            <Link href="/#">Return</Link>
          </li>
          <li>
            <Link href="/privacy-policies">Privacy Policies</Link>
          </li>
        </ul>
        <div className="md:space-y-10">
          <div className="text-[#9F9F9F]">New Letter</div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <input
              type="email"
              className="border-b-2 border-b-black"
              placeholder="Enter Email Here!"
            ></input>
            <button className="border-b-2 border-b-black font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <p className="mb-10">
        © Copyright © 2024 Furniture. All rights reverved
      </p>
    </div>
  );
}
