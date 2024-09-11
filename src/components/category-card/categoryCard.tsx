import React from "react";
import Card from "@/components/category-card/card";

export default function CategoryCard() {
  return (
    <div className="mt-6 w-screen space-y-10 px-8">
      <div className="space-y-1 text-center align-middle">
        <h1 className="text-4xl">Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="relative flex w-full flex-nowrap items-center justify-center gap-4 overflow-hidden">
        <Card image="/Dining.png" title={"Dining"} />

        <Card image="/Dining.png" title={"Dining"} />

        <Card image="/Dining.png" title={"Dining"} />
      </div>
    </div>
  );
}
