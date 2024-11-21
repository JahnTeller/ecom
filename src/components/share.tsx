import React from "react";
import Image from "next/image";
export default function Share() {
  return (
    <div aria-label="items-grid" className="m-auto w-[91%] pt-8">
      <div className="m-auto flex w-[80%] flex-col pb-5 text-center">
        <h1>Share Your Setup With</h1>
        <h2 className="text-3xl font-bold">#FurniroFuniture</h2>
      </div>
      <Image
        src="https://utfs.io/f/9LB9Yap3ymNlvIPOmXr5Gwy4u9tkCdMjeHgp1s7cEWK8qS0J"
        height={800}
        width={1400}
        alt="shareImage"
      />
    </div>
  );
}
