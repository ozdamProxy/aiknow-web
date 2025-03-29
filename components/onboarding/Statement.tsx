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

  const Statement:React.FC<OptionProps> = ({title,options,step}) => {

    const router = useRouter();

    const handleNextStep = () => {
        router.push(`/onboarding/${parseInt(step) + 1}`); 
    };
 

  return (
    <div className="w-full mt-[70px] items-center justify-items-center  ">

        <h3 className="text-[20px] text-black font-semibold text-center">Do you relate to this statement?</h3>
        <div
            className={`flex flex-col  border border-[#AEAEAE] rounded-lg max-w-[480px] mx-[15px] p-[20px] mt-[30px] gap-3
                ${step === "17" ? "bg-[#BDE4FF]" : 
                step === "18" ? "bg-[#FFB98A]" : 
                step === "19" ? "bg-[#6CEABC]" : "bg-white"}`}
        >
             <Image
                        src={`/onboarding/nail_${step}.svg`}
                        alt={`Image_`}
                        width={21}
                        height={28}
                        objectFit="cover"
                        className={`rounded-lg 
                            ${step === "17" ? " #0099FF" : ""}
                            ${step === "18" ? "#FF88330" : ""}
                            ${step === "19" ? "#03BB77" : ""}`}
                      />
            <p className="text-black text-[22px] font-normal">{title}</p>
        </div>
        <p className="text-black text-sm font-normal my-[30px] text-center px-[15px]">Notification will help you stay on track and push you to achieve your goals</p>

        <div className="flex items-center justify-center gap-3">
            <div className="flex-col flex gap-2 items-center justify-center w-[150px] bg-[#F3F3F3] py-[10px] border border-[#AEAEAE] rounded-lg"
            onClick={()=>handleNextStep()}>
            <Image
                src={`/onboarding/Close_S.svg`}
                alt={`Image_`}
                width={33}
                height={24}
                objectFit="cover"
            />
            <p className="font-semibold text-[20px] text-black">No</p>
            </div>
            <div className="flex-col flex gap-2 items-center justify-center w-[150px] py-[10px] bg-[#F3F3F3] border border-[#AEAEAE] rounded-lg"
            onClick={()=>handleNextStep()}>
            <Image
                src={`/onboarding/Check.svg`}
                alt={`Image_`}
                width={33}
                height={24}
                objectFit="cover"
            />
            <p className="font-semibold text-[20px] text-black">Yes</p>
            </div>

        </div>
    </div>
  );
}

export default Statement
