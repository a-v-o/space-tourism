import type { Metadata } from "next";
import Navbar from "@/app/navbar";
import "./globals.css";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata: Metadata = {
  title: "Space Tourism",
  description:
    "Space tourism website built by Adejuwon Oluwafunmito for Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll">
        <Navbar />
        <ViewTransition name="page">{children}</ViewTransition>
      </body>
    </html>
  );
}
