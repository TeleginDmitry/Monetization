import { partnersLogos } from "@/config/partners";
import Image from "next/image";
import React from "react";

export function PartnersSection() {
  return (
    <section className="section bg-gray-75">
      <div className="container grid grid-cols-1 mobile:grid-cols-2 justify-between items-center gap-5">
        <h2 className="text-24 font-bold">
          Наши партнёры по монетизации
        </h2>

        <div className="grid grid-cols-3 items-center gap-3 justify-center mobile:justify-normal">
          {partnersLogos.map((url) => {
            return (
              <Image
                className="w-full h-8 mobile:h-10 tablet:h-12 mobile:first:order-1 mobile:last:order-3 mobile:order-2 first:order-1 last:order-2 order-3"
                key={url}
                src={url}
                alt="Partner logo"
                width={100}
                height={50}
              ></Image>
            );
          })}
        </div>
      </div>
    </section>
  );
}
