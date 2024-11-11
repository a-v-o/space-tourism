import type { Metadata } from "next";
import Image from "next/image";
import data from "@/data/data.json";
import { barlow, barlowCond, bellefair } from "@/app/fonts/fonts";
import Link from "next/link";
import clsx from "clsx";

const technology = data.technology;
export const metadata: Metadata = {
  title: "Technology",
};

export default function Page({ params }: { params: { tech: number } }) {
  return (
    <div>
      <main className="bg-[url('/assets/technology/background-technology-mobile.jpg')]  md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]  w-full h-[1024px] min-h-screen pt-[136px] flex justify-center lg:justify-end md:items-center bg-cover">
        <div className="w-screen lg:w-[88%] h-[90%] lg:h-[800px] flex text-white text-[16px] md:text-[28px] flex-col items-center md:items-start gap-[24px]">
          <h4 className={barlowCond.className}>
            <span className="font-bold opacity-25 tracking-[4.72px] md:ml-12 lg:ml-0 mr-[24px]">
              03
            </span>
            <span className="tracking-[1px]">SPACE LAUNCH 101</span>
          </h4>
          {technology.map((tech, index) => (
            <div
              key={tech.name}
              className={clsx(
                "flex flex-col lg:flex-row md:justify-between gap-[32px] w-full h-full",
                {
                  flex: index == params.tech,
                  hidden: index != params.tech,
                }
              )}
            >
              <div className="flex lg:hidden w-full h-fit md:h-full justify-center items-end pt-[64px] lg:pt-0">
                <Image
                  src={tech.images.landscape}
                  alt={tech.name}
                  width={1800}
                  height={600}
                  className="w-full"
                ></Image>
              </div>
              <div className="flex flex-col items-center lg:flex-row w-full lg:h-full gap-[40px] lg:gap-[64px]">
                <ul className="flex lg:flex-col lg:h-full justify-center text-[#D0D6F9] tracking-[2px] text-[16px] gap-[32px]">
                  {technology.map((tech, index) => (
                    <li key={tech.name} className={bellefair.className}>
                      <Link href={`/technology/${index}`}>
                        <div
                          className={clsx(
                            "w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] flex justify-center items-center rounded-full text-[18px] lg:text-[32px]",
                            {
                              "bg-white text-black": index == params.tech,
                              "border-solid border-2 border-opacity-25 border-white hover:border-opacity-50 transition-all":
                                index != params.tech,
                            }
                          )}
                        >
                          {index + 1}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-[16px] lg:gap-[24px] justify-center w-[90%] md:w-[65%] h-full text-center lg:text-start">
                  <div
                    className={`${bellefair.className} flex flex-col gap-[16px]`}
                  >
                    <h3
                      className={
                        "text-[18px] md:text-[24px] lg:text-[32px] opacity-50"
                      }
                    >
                      THE TERMINOLOGY
                    </h3>
                    <h2 className={"text-[24px] lg:text-[56px]"}>
                      {tech.name.toUpperCase()}
                    </h2>
                  </div>
                  <p
                    className={`${barlow.className} text-[16px] lg:text-[18px] text-[#D0D6F9] leading-6 md:leading-7`}
                  >
                    {tech.description}
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex min-w-[44%] h-full items-center">
                <Image
                  src={tech.images.portrait}
                  alt={tech.name}
                  width={600}
                  height={600}
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
