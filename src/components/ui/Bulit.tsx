import Image from "next/image";
import React from "react";

export function Bulit() {
  return (
    <div className="p-2 rounded-full bg-orange-100">
      <Image className="min-w-3" src="/svg/arrow.svg" alt="arrow" width={12} height={12}></Image>
    </div>
  );
}
