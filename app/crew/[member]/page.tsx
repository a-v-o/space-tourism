import type { Metadata } from "next";
import Image from "next/image";
import data from "@/data/data.json";
import { barlow, barlowCond, bellefair } from "@/app/fonts/fonts";
import Link from "next/link";
import clsx from "clsx";

const crew = data.crew;
export const metadata: Metadata = {
  title: "Crew",
};

export default function Page({ params }: { params: { member: number } }) {
  return (
    <main className="bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] w-full h-[1024px] min-h-screen pt-[136px] flex px-[24px] md:px-[48px] justify-center md:items-end lg:items-center bg-cover">
      <div className="w-[95%] lg:w-[85%] h-[90%] md:h-[96%] lg:h-[800px] flex text-white text-[16px] md:text-[28px] flex-col items-center md:items-start gap-[24px]">
        <h4 className={barlowCond.className}>
          <span className="font-bold opacity-25 tracking-[4.72px] mr-[24px]">
            02
          </span>
          <span className="tracking-[1px]">MEET YOUR CREW</span>
        </h4>
        {crew.map((member, index) => (
          <div
            key={member.name}
            className={clsx(
              "flex flex-col lg:flex-row overflow-hidden items-center md:items-start justify-between gap-[32px] h-full text-center lg:text-start",
              {
                flex: index == params.member,
                hidden: index != params.member,
              }
            )}
          >
            <div className="flex flex-col w-full h-full gap-[24px] md:gap-[40px]">
              <div className="flex flex-col gap-[24px] justify-center h-full">
                <div
                  className={`${bellefair.className} flex flex-col gap-[8px] md:gap-[16px]`}
                >
                  <h3 className={"text-[24px] lg:text-[32px] opacity-50"}>
                    {member.role.toUpperCase()}
                  </h3>
                  <h2 className={"text-[24px] md:text-[40px] lg:text-[56px]"}>
                    {member.name.toUpperCase()}
                  </h2>
                </div>
                <p
                  className={`${barlow.className} text-[15px] md:text-[16px] lg:text-[18px] text-[#D0D6F9] leading-7`}
                >
                  {member.bio}
                </p>
              </div>
              <ul className="flex justify-center lg:justify-start text-[#D0D6F9] tracking-[2px] text-[16px] gap-[16px] md:gap-[40px] md:pb-[48px]">
                {crew.map((member, index) => (
                  <li key={member.name} className={barlowCond.className}>
                    <Link href={`/crew/${index}`}>
                      <div
                        className={clsx(
                          "w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full",
                          {
                            "bg-white": index == params.member,
                            "bg-[#979797]": index != params.member,
                          }
                        )}
                      ></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-[270px] h-[340px] md:w-full md:h-full justify-center lg:justify-start items-center">
              <Image
                src={member.images.png}
                alt={member.name}
                width={480}
                height={480}
                className="h-full md:h-auto"
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}