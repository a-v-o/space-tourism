"use client";

import { unstable_ViewTransition as ViewTransition } from "react";

export default function PageTransition() {
  return (
    <ViewTransition name="overlay">
      <div className="absolute bg-[#18212d] w-full h-screen top-0 left-0 -translate-y-[100vh] z-50"></div>
    </ViewTransition>
  );
}
