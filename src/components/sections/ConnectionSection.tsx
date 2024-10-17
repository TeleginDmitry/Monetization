import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import { Textarea } from "../ui/Textarea";

export function ConnectionSection() {
  return (
    <section className="section">
      <div className="container flex flex-col gap-10">
        <h2 className="text-32 font-bold">Заполните форму</h2>

        <form className="grid grid-cols-1 tablet:grid-cols-2 items-center gap-10">
          <Textarea
            inputMode="text"
            variant="primary"
            rows={8}
            placeholder="Напишите свой вопрос"
          ></Textarea>

          <div className="flex flex-col gap-8">
            <Input
              required
              inputMode="email"
              pattern="[^@]+@[^@]+\.[^@]+"
              variant="secondary"
              type="email"
              placeholder="Введите e-mail"
            ></Input>

            <label className="flex gap-3 items-start">
              <Checkbox></Checkbox>
              <p className="text-xs cursor-pointer">
                Я ознакомлен(а) с{" "}
                <a className="underline" href="#">
                  политикой конфиденциальности
                </a>{" "}
                и согласен(на) на обработку{" "}
                <a className="underline" href="#">
                  персональных данных
                </a>
                .
              </p>
            </label>

            <Button type="submit" className="text-xs" variant="secondary">
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
