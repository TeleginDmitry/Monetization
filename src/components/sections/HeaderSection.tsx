import React from "react";
import { Button } from "../ui/Button";
import { Toggle } from "../shared/toggle/Toggle";

export function HeaderSection() {
  return (
    <section className="section flex relative pt-32 bg-top-section-320 mobile:bg-top-section-768 tablet:bg-top-section-1440 bg-no-repeat bg-cover bg-top tablet:min-h-dvh">
      <div className="container relative z-10 flex flex-col items-start w-full flex-1 justify-between gap-20">
        <div className="flex flex-col items-start gap-14 w-full">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-80 font-bold">
              Монетизируйте клиентскую базу, не снижая NPS
            </h1>

            <p className="text-24 max-w-xl">
              Найдите идеальный баланс выручки и удовлетворённости пользователей
              с платформой рекламной монетизации
            </p>
          </div>

          <Button className="w-full tablet:w-auto">Заказать звонок</Button>
        </div>
        <div className="grid tablet:grid-cols-2 grid-cols-1 gap-3 justify-between w-full">
          <p className="font-bold text-32 max-w-lg">
            Дополнительные источники выручки для разных компаний
          </p>
          <Toggle>
            <Toggle.Item
              content="Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации"
              title="Операторам"
            ></Toggle.Item>
            <Toggle.Item
              content="Дополнительные возможности обогащения данных об аудитории и монетизации"
              title="ОТТ сервисам"
            ></Toggle.Item>
          </Toggle>
        </div>
      </div>
    </section>
  );
}
