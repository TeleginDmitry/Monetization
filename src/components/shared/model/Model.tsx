import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export function Model({ className }: Props) {
  return (
    <div
      className={`grid tablet:grid-cols-[auto_1fr_auto] grid-cols-1 ${className}`}
    >
      <Image
        className="min-h-3 object-cover object-left hidden self-center tablet:block"
        src={"/svg/line-left.svg"}
        alt="Line left"
        width={220}
        height={5}
      ></Image>

      <Image
        className="min-h-14 w-auto object-cover block tablet:hidden self-end justify-self-center"
        src={"/svg/line-top.svg"}
        alt="Line left"
        width={2}
        height={56}
      ></Image>

      <div className="p-5 rounded-xl bg-orange-100 flex justify-center">
        <Image
          className="min-w-20"
          src={"/svg/model.svg"}
          alt="Model"
          width={80}
          height={75}
        ></Image>
      </div>

      <Image
        className="min-h-3 object-cover object-right self-center hidden tablet:block"
        src={"/svg/line-right.svg"}
        alt="Line right"
        width={220}
        height={5}
      ></Image>

      <Image
        className="min-h-14 w-auto object-cover block tablet:hidden justify-self-center"
        src={"/svg/line-bottom.svg"}
        alt="Line left"
        width={2}
        height={56}
      ></Image>
    </div>
  );
}
