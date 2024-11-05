import { Barlow_Condensed } from "next/font/google";
import { Bellefair } from "next/font/google";
import { Barlow } from "next/font/google";

export const barlowCond = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});
