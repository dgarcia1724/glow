"use client";

import React from "react";

export default function FilterOptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
