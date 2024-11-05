import { barlowCond } from "./fonts/fonts";
import { barlow } from "./fonts/fonts";
import { bellefair } from "./fonts/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] w-full min-h-screen h-[1024px] md:min-h-screen pt-[100px] md:pt-[136px] flex px-[24px] md:px-[48px] justify-center md:items-center bg-cover">
      <div className="md:w-[85%] h-[724px] md:h-[675px] flex flex-col lg:flex-row justify-center md:justify-between items-end gap-[48px] md:gap-0">
        <div className="flex flex-col items-center lg:items-start w-full h-full md:h-fit gap-[24px] md:gap-0">
          <p
            className={`${barlowCond.className} text-[16px] md:text-[28px] tracking-[2px] text-[#D0D6F9]`}
          >
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p
            className={`${bellefair.className} text-[80px] md:text-[144px] text-white`}
          >
            SPACE
          </p>
          <p
            className={`${barlow.className} text-[15px] md:text-[18px] text-center lg:text-start leading-[180%] text-[#D0D6F9]`}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="w-full h-full md:h-fit flex justify-center lg:justify-end items-center">
          <Link href="/destinations/moon" className={bellefair.className}>
            <p className="w-[144px] h-[144px] md:w-[272px] md:h-[272px] rounded-full bg-white flex justify-center items-center text-[18px] md:text-3xl">
              EXPLORE
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
