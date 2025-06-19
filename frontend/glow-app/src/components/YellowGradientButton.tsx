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
    "px-8 py-3 rounded-full bg-gradient-to-tr from-fuchsia-400 via-fuchsia-300 to-fuchsia-500 text-black font-medium hover:from-fuchsia-500 hover:via-fuchsia-400 hover:to-fuchsia-600 transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-fuchsia-200 text-center cursor-pointer " +
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
