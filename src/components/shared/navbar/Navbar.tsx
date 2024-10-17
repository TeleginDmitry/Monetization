"use client";

import { Burger } from "@/components/ui/Burger";
import { NavbarContext } from "@/context/Navbar.context";
import { useContext } from "react";
import { Links } from "../links/Links";

export function Navbar() {
  const { isActive } = useContext(NavbarContext);

  if (!isActive) return;

  return (
    <div className="flex gap-14 px-4 py-10 w-full mobile:w-auto items-start justify-between bg-white fixed inset-y-0 right-0 h-dvh z-20">
      <nav className="h-full flex items-center justify-center">
        <ul className="flex flex-col gap-5 font-onest">
          <Links></Links>
        </ul>
      </nav>
      <Burger variant="secondary"></Burger>
    </div>
  );
}
