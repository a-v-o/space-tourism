"use client";

import Image from "next/image";
import { barlowCond } from "@/app/fonts/fonts";
import Link from "next/link";
import "./globals.css";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const spanClass = "w-[24px] h-[3px] bg-white transition-all";
  const first = "rotate-45 translate-y-[9px] " + spanClass;
  const second = "opacity-0 " + spanClass;
  const third = "-rotate-45 -translate-y-[9px] " + spanClass;

  const [classes, setClasses] = useState({
    firstSpan: spanClass,
    secondSpan: spanClass,
    thirdSpan: spanClass,
  });

  const [closed, setClosed] = useState(true);

  const handleClick = () => {
    if (closed) {
      setClasses({ firstSpan: first, secondSpan: second, thirdSpan: third });
      setClosed(false);
    } else {
      setClasses({
        firstSpan: spanClass,
        secondSpan: spanClass,
        thirdSpan: spanClass,
      });
      setClosed(true);
    }
  };

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
              className="w-12 h-12"
            ></Image>
          </Link>
          <hr className="text-white h-1 w-0 md:w-full opacity-25 z-10 -mr-[32px]" />
        </div>
        <div
          className="z-20 flex flex-col w-full h-full gap-[6px] md:hidden justify-center items-end pr-6"
          onClick={handleClick}
        >
          <span className={classes.firstSpan}></span>
          <span className={classes.secondSpan}></span>
          <span className={classes.thirdSpan}></span>
        </div>
        <ul
          className={clsx(
            "z-10 transition-all tracking-[2px] flex flex-col md:flex-row text-[16px] md:justify-end gap-[32px] md:gap-12 -ml-2 text-white pt-[148px] md:pt-0 px-[32px] md:px-10 lg:px-16 bg-[#0B0D17] md:bg-white bg-opacity-15 md:bg-opacity-5 backdrop-blur-3xl md:items-center fixed top-0 md:relative w-[255px] md:w-full h-screen md:h-[96px]",
            {
              "-right-[100%] md:right-0": closed == true,
              "right-0": closed == false,
            }
          )}
        >
          <li>
            <Link href="/" className="flex gap-3">
              <p className="font-bold tracking-[2.7px]">00</p>
              <p>HOME</p>{" "}
            </Link>
          </li>
          <li>
            <Link href="/destinations/moon" className="flex gap-3">
              <p className="font-bold tracking-[2.7px]">01</p>
              <p>DESTINATION</p>{" "}
            </Link>
          </li>
          <li>
            <Link href="/crew/0" className="flex gap-3">
              <p className="font-bold tracking-[2.7px]">02</p>
              <p>CREW</p>{" "}
            </Link>
          </li>
          <li>
            <Link href="/technology/0" className="flex gap-3">
              <p className="font-bold tracking-[2.7px]">03</p>
              <p>TECHNOLOGY</p>{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
