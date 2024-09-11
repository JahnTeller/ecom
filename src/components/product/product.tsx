import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";
import Product from "@/components/product/product";
import ProductGrid from "./productGrid";

export default function product() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-8 text-[2.25rem] font-extrabold">Our Product</div>
      <ProductGrid />
      <button className="mt-10 border-2 border-[#B88E2F] px-[5rem] py-[1rem] font-semibold text-[#B88E2F]">
        Show More
      </button>
    </div>
  );
}
