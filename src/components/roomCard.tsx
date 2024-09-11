import React from "react";
import Image from "next/image";
import { roomCardProps } from "~/utils/lib";

export default function RoomCard({ title, imageUrl }: roomCardProps) {
  console.log(imageUrl);
  return (
    <div
      key={title}
      className="flex h-fit w-fit max-w-4xl flex-col items-center justify-center gap-10 bg-white"
    >
      <div className="relative h-[27rem] w-[21rem] bg-white">
        <Image src={imageUrl} fill={true} sizes="fill" alt="roomImage" />
      </div>
      <div className="text-xl">{title}</div>
    </div>
  );
}
