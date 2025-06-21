import React from "react";
import Link from "next/link";

interface YellowGradientButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  form?: string;
  disabled?: boolean;
}

export default function YellowGradientButton({
  children,
  href,
  type = "button",
  className = "",
  form,
  disabled = false,
}: YellowGradientButtonProps) {
  const baseClass =
    "px-8 py-3 rounded-full bg-gradient-to-tr from-teal-300 via-teal-200 to-teal-400 text-black font-medium hover:from-teal-400 hover:via-teal-300 hover:to-teal-500 transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-200 text-center cursor-pointer " +
    className;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={baseClass} form={form} disabled={disabled}>
      {children}
    </button>
  );
}
