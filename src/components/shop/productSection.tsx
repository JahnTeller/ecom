"use client";
import React from "react";
import ProductGrid from "../product/productGrid";
import Dropdowncomponent from "../Dropdowncomponent";
import FilterPopover from "./filterPopover";
import { caterogyData } from "@/util/data";
import { sortItem } from "@/util/data";

export default function ProductSection() {
  function hanldalFiller() {
    console.log("click filter");
  }
  function sortselected(item: string) {
    console.log(item);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      {/* filter bar */}
      <div className="flex h-[6.25rem] w-full items-center justify-between bg-[#F9F1E7] px-2 md:px-10">
        <div className="flex gap-4">
          <FilterPopover />
          <p className="hidden md:flex">showing 1-X of Y results</p>
        </div>
        <div className="flex">
          <div className="space-x-3">
            <label>Short by</label>
            <Dropdowncomponent items={sortItem} selectedItem={sortselected} />
          </div>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
}
