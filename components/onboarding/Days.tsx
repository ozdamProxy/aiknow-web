"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ContinueButton from "./ContinueButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface OptionProps {
    title: string;
    options: string[];
    step:string
  }

  const Days:React.FC<OptionProps> = ({title,options,step}) => {

    const router = useRouter();

    const handleNextStep = () => {
        router.push(`/onboarding/${parseInt(step) + 1}`); 
    };
 

  return (
    <div className="w-full mt-[70px] items-center justify-items-center ">

        <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[10px] sm:mb-[25px]">Like Time</h3> 

        <p className="text-[18px] sm:text-[20px] text-black font-normal px-[10px] sm:font-semibold leading-[37px] text-center mb-[25px] ">
        21 days may be a great start to build a habit
        </p> 
       <Image
                  src="/onboarding/day_21.svg"
                  alt={`Image_thumb`}
                  width={315}
                  height={315}
                  objectFit="cover"
                  className="rounded-lg sm:my-[120px] my-[40px]"
                  />

        <ContinueButton onClick={handleNextStep} /> 
    </div>
  );
}

export default Days
