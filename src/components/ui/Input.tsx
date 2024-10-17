import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
}

export function Input({ className, variant = "primary", ...props }: Props) {
  const variants = {
    primary: "input-primary",
    secondary: "input-secondary",
  };

  return (
    <label className="relative space-y-2">
      <input
        className={`${variants[variant]} ${className} peer`}
        {...props}
      ></input>
      <p className="invisible peer-invalid:peer-focus:visible text-red">
        Неправильно указана почта
      </p>
    </label>
  );
}
