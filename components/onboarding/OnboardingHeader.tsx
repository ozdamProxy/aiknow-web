"use client";
import Image from "next/image"; 

export default function OnboardingHeader() {

  return (
    <div className="w-full py-[18px] items-center justify-items-center bg-[#89898914]">
        <Image
             src="/logo.svg"
             alt="Next.js logo"
             width={124}
             height={32}
             priority
        />
    </div>
  );
}
