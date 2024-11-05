import type { Metadata } from "next";
import Navbar from "@/app/navbar";
import "./globals.css";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
