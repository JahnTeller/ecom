import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative h-[32px] w-[50px]">
      <Image src="/img.png" alt="Logo" fill={true} sizes="fill" />
    </div>
  );
}
