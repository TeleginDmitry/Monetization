import { reports } from "@/config/reports";
import Image from "next/image";
import React from "react";
import { Bulit } from "../ui/Bulit";
import { Button } from "../ui/Button";

export function ReportsSection() {
  return (
    <section id="reports" className="section bg-gray-100">
      <div className="container pr-0 tablet:!pr-6 grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-10 items-start pr-4 tablet:pr-0">
          <h2 className="text-24 font-bold max-w-40 mobile:max-w-36 tablet:max-w-96">
            Подробные отчёты для вас и правообладателей
          </h2>

          <ul className="flex flex-col gap-6">
            {reports.map((report) => (
              <li className="flex gap-5 items-start max-w-md" key={report}>
                <Bulit></Bulit>
                <p className="text-22">{report}</p>
              </li>
            ))}
          </ul>

          <Button
            className="w-full tablet:w-auto text-nowrap text-xs"
            variant="secondary"
          >
            Заказать звонок
          </Button>
        </div>

        <Image
          className="w-full"
          src="/images/pc.png"
          alt="PC"
          width={700}
          height={450}
        ></Image>
      </div>
    </section>
  );
}
