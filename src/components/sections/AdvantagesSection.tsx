import React from "react";
import { Bulit } from "../ui/Bulit";
import { Model } from "../shared/model/Model";

export function AdvantagesSection() {
  return (
    <section id="advantages" className="section bg-gray-100">
      <div className="container flex flex-col gap-8 mobile:gap-12 tablet:gap-24 tablet:pb-28">
        <h2 className="text-32 font-bold text-center">
          Баланс между выручкой и удовлетворённостью пользователей
        </h2>

        <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] tablet:grid-cols-3 tablet:grid-rows-1 gap-5 mt-10 items-center">
          <div className="flex flex-col gap-3 items-start mobile:gap-5">
            <Bulit></Bulit>

            <h3 className="text-24 font-bold">Частотность под контролем</h3>

            <p className="text-18">
              Чтобы не ронять NPS и не увеличивать отток пользователей
            </p>
          </div>

          <Model className="justify-self-center tablet:justify-self-auto"></Model>

          <div className="flex flex-col gap-3 items-start mobile:gap-5">
            <Bulit></Bulit>

            <h3 className="text-24 font-bold">Максимальная выручка</h3>

            <p className="text-18">
              За счёт заполенения всех рекламных мест по высокой цене
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
