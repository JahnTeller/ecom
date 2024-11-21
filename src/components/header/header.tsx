"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "~/components/logo";
const menu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const closeMenu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);
export default function Header() {
  const [isMenuClose, setIsMenuClose] = useState(true);
  function onToggleMenu() {
    setIsMenuClose(!isMenuClose);
  }

  return (
    <header className="relative top-[100%] z-10 flex h-24 w-full flex-col bg-white py-5 text-black lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:px-10">
      <Link
        href="/"
        className="absolute left-2 top-1/3 flex text-2xl lg:relative lg:top-0"
      >
        <Logo />
        <div className="font-bold">Furniro</div>
      </Link>
      <ul
        className={
          (isMenuClose ? "hidden" : "flex") +
          " w-full flex-col items-center justify-center space-y-5 bg-white pt-20 font-bold lg:flex lg:flex-row lg:space-x-12 lg:space-y-0 lg:pt-0"
        }
      >
        <li className="relative transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
          <Link href="/">Home</Link>
        </li>
        <li className="relative transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="relative transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
          <Link href="/about">About</Link>
        </li>
        <li className="relative transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul
        className={
          (isMenuClose ? "hidden" : "flex") +
          " h-fit items-center justify-center gap-10 bg-white p-4 lg:flex"
        }
      >
        <li className="relative transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1.5px] before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1.5px] after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
          <Link href="/profile">
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
        </li>
        <li className="relative pb-1 transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1.5px] before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1.5px] after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
          <Link href="/search">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Link>
        </li>
        <li className="relative pb-1 transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1.5px] before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1.5px] after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
          <Link href="/wishlist">
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
          </Link>
        </li>
        <li className="relative pb-1 transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1.5px] before:w-0 before:origin-center before:bg-gray-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1.5px] after:w-0 after:origin-center after:bg-gray-400 after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
          <Link href="/cart">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>
        </li>
      </ul>
      <button
        className="absolute right-1 flex pt-3 sm:right-3 lg:hidden"
        onClick={onToggleMenu}
      >
        {isMenuClose ? menu : closeMenu}
      </button>
    </header>
  );
}
