import { barlowCond } from "./fonts/fonts";
import { barlow } from "./fonts/fonts";
import { bellefair } from "./fonts/fonts";
import Link from "next/link";
import * as motion from "motion/react-client";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  let delay = 1;
  return (
    <div>
      <PageTransition />
      <main className="bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] w-full min-h-screen h-[1024px] md:min-h-screen pt-[100px] md:pt-[136px] flex px-[24px] md:px-[48px] justify-center md:items-center bg-cover">
        <div className="md:w-[85%] h-[724px] md:h-[675px] flex flex-col lg:flex-row justify-center md:justify-between items-end gap-[48px] md:gap-0">
          <motion.div className="flex flex-col items-center lg:items-start w-full h-full md:h-fit gap-[24px] md:gap-0">
            <p
              className={`${barlowCond.className} text-[16px] md:text-[28px] tracking-[2px] text-[#D0D6F9]`}
            >
              {"SO, YOU WANT TO TRAVEL TO".split(" ").map((word, index) => {
                delay += 0.1 * index;
                return (
                  <span
                    key={word + index}
                    className="overflow-hidden mr-1 inline-flex"
                  >
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: delay, duration: 0.5 }}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <p
              className={`${bellefair.className} text-[80px] md:text-[144px] text-white flex overflow-hidden`}
            >
              <motion.span
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: delay }}
              >
                SPACE
              </motion.span>
            </p>
            <p
              className={`${barlow.className} text-[15px] md:text-[18px] text-center lg:text-start leading-[180%] text-[#D0D6F9]`}
            >
              {"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
                .split(" ")
                .map((word, index) => {
                  delay += 0.1 * index;
                  return (
                    <span
                      key={word + index}
                      className="overflow-hidden mr-1 inline-flex"
                    >
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.01 * index }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
            </p>
          </motion.div>
          <div className="w-full h-full md:h-fit flex justify-center lg:justify-end items-center">
            <Link href="/destinations" className={bellefair.className}>
              <p className="w-[144px] h-[144px] hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] transition-all md:w-[272px] md:h-[272px] rounded-full bg-white text-slate-700 flex justify-center items-center text-[18px] md:text-3xl">
                EXPLORE
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
