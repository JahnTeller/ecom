import React from "react";
import Image from "next/image";

interface ImageCard {
  image: string;
  title: string;
}
export default function ImageCard({ image, title }: ImageCard) {
  return (
    <div className="space-y-6 py-6 text-center text-[1.5em] font-bold">
      <Image src={image} alt={title} height={480} width={381} />
      <h2>{title}</h2>
    </div>
  );
}
