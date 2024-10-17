"use client";

import { useState } from "react";

export function Checkbox() {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => setChecked((state) => !state);

  return (
    <>
      <div
        className={`p-1 rounded-xs cursor-pointer flex items-center justify-center border border-solid border-transparent transition-colors ${
          checked ? "bg-orange-100" : "!border-gray-25"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className={`w-3 h-3 ${checked ? "visible" : "invisible"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <input
        checked={checked}
        onChange={toggleCheckbox}
        type="checkbox"
        className="hidden"
      ></input>
    </>
  );
}
