"use client";

import Image from "next/image";
import { barlowCond } from "@/app/fonts/fonts";
import Link from "next/link";
import "./globals.css";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [closed, setClosed] = useState(true);

  const pathname = usePathname();

  const handleClick = () => {
    setClosed(!closed);
  };

  const links = [
    { name: "home", href: "/" },
    { name: "destination", href: "/destinations" },
    { name: "crew", href: "/crew" },
    { name: "technology", href: "/technology" },
  ];

  const [currentLink, setCurrentLink] = useState(pathname);
  const [hoveredLink, setHoveredLink] = useState("");

  useEffect(() => {
    setCurrentLink(pathname);
  }, [pathname]);

  return (
    <header
      className={`${barlowCond.className} ${barlowCond.className} antialiased`}
    >
      <nav className="flex justify-between items-center absolute top-0 left-0 pt-[40px] w-full">
        <div className="flex gap-16 pl-6 md:pl-10 lg:pl-16 items-center w-full">
          <Link href="/">
            <Image
              src="/assets/shared/logo.svg"
              alt="Logo for the space tourism website"
              width={0}
              height={0}
              className="min-w-12 h-12"
            ></Image>
          </Link>
          <hr className="text-white h-1 w-0 md:w-full opacity-25 z-30 -mr-[32px]" />
        </div>
        <div
          className="z-30 flex flex-col w-full h-full gap-[6px] md:hidden justify-center items-end pr-6 cursor-pointer"
          onClick={handleClick}
        >
          <span
            style={{
              transitionDuration: "0.5s",
            }}
            className={clsx("w-[24px] h-[3px] bg-white transition-all", {
              "rotate-45 translate-y-[9px]": !closed,
            })}
          ></span>
          <span
            style={{
              transitionDuration: "0.5s",
            }}
            className={clsx("w-[24px] h-[3px] bg-white transition-all", {
              "opacity-0": !closed,
            })}
          ></span>
          <span
            style={{
              transitionDuration: "0.5s",
            }}
            className={clsx("w-[24px] h-[3px] bg-white transition-all", {
              "-rotate-45 -translate-y-[9px]": !closed,
            })}
          ></span>
        </div>
        <ul
          style={{
            transitionDuration: "0.7s",
          }}
          className={clsx(
            "z-20 transition-all tracking-[2px] flex flex-col md:flex-row text-[16px] md:justify-end gap-[32px] md:gap-12 -ml-2 text-white pt-[148px] md:pt-0 px-[32px] md:px-10 lg:px-16 bg-[#0B0D17] md:bg-white bg-opacity-15 md:bg-opacity-5 backdrop-blur-3xl md:items-center fixed top-0 md:relative w-[255px] md:w-full h-screen md:h-[96px]",
            {
              "-right-[100%] md:right-0": closed == true,
              "right-0": closed == false,
            }
          )}
        >
          {links.map((link, index) => (
            <li
              key={link.name}
              className="md:h-full"
              onClick={() => {
                setCurrentLink(link.href);
                setClosed(true);
              }}
              onMouseEnter={() => {
                setHoveredLink(link.href);
              }}
              onMouseLeave={() => {
                setHoveredLink("");
              }}
            >
              <Link
                href={link.href}
                className="transition-all flex items-center gap-3 h-full relative"
              >
                {currentLink == link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute right-0 md:bottom-0 md:left-0 h-full w-[2px] md:w-full md:h-[2px] bg-white"
                  ></motion.div>
                )}

                {hoveredLink == link.href && currentLink != link.href && (
                  <div className="absolute transition-all right-0 md:bottom-0 md:left-0 h-full w-[2px] md:w-full md:h-[2px] bg-white bg-opacity-50"></div>
                )}
                <p className="font-bold tracking-[2.7px]">{"0" + index}</p>
                <p>{link.name.toUpperCase()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        style={{
          transitionDelay: "0.25s",
        }}
        className={clsx(
          "transition-all absolute top-0 left-0 w-screen h-screen md:w-0 z-10 bg-black bg-opacity-40",
          {
            "invisible bg-opacity-0": closed,
          }
        )}
      />
    </header>
  );
}
