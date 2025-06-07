"use client";
import React from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
