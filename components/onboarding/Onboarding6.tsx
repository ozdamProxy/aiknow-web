"use client";
import Image from "next/image"; 
import ContinueButton from "./ContinueButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Onboarding6() {

    const router = useRouter();

    const handleNextStep = () => {
        router.push(`/onboarding/8`)
      };

  return (
    <div className="w-full my-[18px] items-center justify-items-center mt-[40px] h-full bg-[#FFFAF0]">

                <Image
                src="/onboarding/listen2.svg"
                alt="Next.js logo"
                width={300}
                height={400}
                priority
                />

        <h3 className="text-xl text-black font-semibold  text-center">And you can grow on the go by listening to audio summaries</h3>

        <ContinueButton onClick={handleNextStep} /> 
         

   

        
       
    </div>
  );
}
