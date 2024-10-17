import React from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "primary" | "secondary";
}

export function Textarea({ className, variant = "primary", ...props }: Props) {
  const variants = {
    primary: "input-primary",
    secondary: "input-secondary",
  };

  return (
    <textarea
      className={`${variants[variant]} ${className}`}
      {...props}
    ></textarea>
  );
}
