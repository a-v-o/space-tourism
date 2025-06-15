"use client";

import { unstable_ViewTransition as ViewTransition } from "react"

export default function PageTransition() {
  return (
    <ViewTransition name="overlay">
      <div className="absolute bg-black w-full h-screen -top-[200%] left-0 z-50"></div>
    </ViewTransition>
  );
}
