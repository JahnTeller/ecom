import React from "react";
import ProductCard from "./productCard";

const newProduct = {
  dateAdded: "",
  image: "/product.png",
  name: "Smartphone 123123123123123",
  price: 999.99,
  detail: "30% off",
  category: { id: "toilet1", title: "Toilet" },
  description:
    "This smartphone features a high-resolution camera, long-lasting battery, and fast charging capabilities.",
};
export default function ProductGrid() {
  return (
    <div className="mb-10 flex w-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
        </div>
      </div>
    </div>
  );
}
