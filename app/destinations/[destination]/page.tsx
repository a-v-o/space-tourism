import type { Metadata } from "next";
import Image from "next/image";
import data from "@/data/data.json";
import { barlow, barlowCond, bellefair } from "@/app/fonts/fonts";
import Link from "next/link";
import clsx from "clsx";

const destinations = data.destinations;
export const metadata: Metadata = {
  title: "Destinations",
};

export default function Page({ params }: { params: { destination: string } }) {
  return (
    <main className="bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] w-full h-[1024px] min-h-screen pt-[136px] flex px-[24px] md:px-[48px] justify-center md:items-center bg-cover">
      <div className="w-[95%] lg:w-[85%] h-[90%] lg:h-[800px] flex items-center md:items-start text-white text-[16px] md:text-[28px] flex-col gap-[24px]">
        <h4 className={barlowCond.className}>
          <span className="font-bold opacity-25 tracking-[4.72px] mr-[24px]">
            01
          </span>
          <span className="tracking-[1px]">PICK YOUR DESTINATION</span>
        </h4>
        {destinations.map((destination) => (
          <div
            key={destination.name}
            className={clsx(
              "flex flex-col lg:flex-row justify-between gap-[32px] h-full",
              {
                flex: params.destination == destination.name.toLowerCase(),
                hidden: params.destination != destination.name.toLowerCase(),
              }
            )}
          >
            <div className="flex w-full h-full justify-center items-center">
              <Image
                src={destination.images.png}
                alt={destination.name}
                width={480}
                height={480}
                className="w-[150px] md:w-[300px] lg:w-[480px]"
              ></Image>
            </div>
            <div className="flex flex-col w-full h-full justify-center gap-[24px] lg:gap-[40px] md:px-10">
              <ul className="flex justify-center lg:justify-start text-[#D0D6F9] tracking-[2px] text-[14px] md:text-[16px] gap-[32px]">
                {destinations.map((destination) => (
                  <li key={destination.name} className={barlowCond.className}>
                    <Link
                      href={`/destinations/${destination.name.toLowerCase()}`}
                      className={clsx("transition-all", {
                        "underline text-white decoration-white decoration-solid decoration-3 underline-offset-8":
                          params.destination.toLowerCase() ==
                          destination.name.toLowerCase(),
                        "hover:underline hover:decoration-white decoration-solid decoration-3 underline-offset-8":
                          params.destination.toLowerCase() !=
                          destination.name.toLowerCase(),
                      })}
                    >
                      {destination.name.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-[16px] text-center lg:text-start">
                <h2
                  className={`${bellefair.className} text-[56px] md:text-[80px] lg:text-[96px]`}
                >
                  {destination.name.toUpperCase()}
                </h2>
                <p
                  className={`${barlow.className} text-[16px] md:text-[16px] lg:text-[18px] text-[#D0D6F9] leading-6 md:leading-7`}
                >
                  {destination.description}
                </p>
              </div>
              <hr className="text-[#979797]" />
              <div className="flex flex-col md:flex-row gap-[24px] text-center lg:text-start">
                <div className="flex flex-col gap-[12px] w-full ">
                  <p
                    className={`${barlowCond.className} text-[14px] tracking-[2px]`}
                  >
                    AVG. DISTANCE
                  </p>
                  <p className={`${bellefair.className} text-[28px]`}>
                    {destination.distance.toUpperCase()}
                  </p>
                </div>
                <div className="flex flex-col gap-[12px] w-full ">
                  <p
                    className={`${barlowCond.className} text-[14px] tracking-[2px]`}
                  >
                    EST. TRAVEL TIME
                  </p>
                  <p className={`${bellefair.className} text-[28px]`}>
                    {destination.travel.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
