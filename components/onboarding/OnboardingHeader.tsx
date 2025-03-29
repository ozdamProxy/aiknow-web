"use client";
import Image from "next/image"; 

export default function OnboardingHeader() {

  return (
    <div className="w-full my-[18px] items-center justify-items-center">
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
