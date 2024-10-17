"use client";

import { useState } from "react";
import { ToggleContext } from "../context/Toggle.context";
import { ToggleValue } from "../types/toggleValue.types";

interface Props {
  children: React.ReactNode;
}

export function ToggleProvider({ children }: Props) {
  const [values, setValues] = useState<ToggleValue[]>([]);

  function addValue(value: ToggleValue) {
    setValues((state) => {
      const hasIsActive = state.some(({ isActive }) => isActive);

      if (!hasIsActive) {
        value.isActive = true;
      }

      return [...state, value];
    });
  }

  function setValueActive(valueId: string) {
    setValues((state) =>
      state.map((value) => {
        const { id, isActive } = value;

        if (isActive && id !== valueId) return { ...value, isActive: false };

        if (id === valueId) {
          return { ...value, isActive: true };
        }

        return value;
      })
    );
  }

  function removeValue(valueId: string) {
    setValues((state) => state.filter((v) => v.id !== valueId));
  }

  return (
    <ToggleContext.Provider
      value={{ values, addValue, setValueActive, removeValue }}
    >
      {children}
    </ToggleContext.Provider>
  );
}
