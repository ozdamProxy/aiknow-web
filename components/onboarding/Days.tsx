"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ContinueButton from "./ContinueButton";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboarding } from "@/context/OptionContextType"; // yol senin yapına göre değişebilir


interface OptionProps {
    title: string;
    options: string[];
    step:string
  }

  const Days:React.FC<OptionProps> = ({title,options,step}) => {

    const router = useRouter();
        const { answers, setAnswers,currentStep,setCurrentStep } = useOnboarding();
    
     useEffect(() => {
        if (parseInt(step) > currentStep) {
        router.replace(`/onboarding/${currentStep}`);
        return;  
      }
     },[])

    const handleNextStep = () => {
        setCurrentStep(parseInt(step) + 1);
        router.push(`/onboarding/${parseInt(step) + 1}`); 
    };
 
    const streakNumber = parseInt(answers.streak ?? "0");


  return (
    <div className="w-full mt-[70px] items-center  flex flex-col justify-items-center ">

        <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[10px] sm:mb-[25px]">Like Time</h3> 

        <p className="text-[18px] sm:text-[20px] text-black font-normal px-[10px] sm:font-semibold leading-[37px] text-center mb-[25px] ">
         {streakNumber} days may be a great start to build a habit
        </p> 
          <div className="relative w-[315px] h-[315px] mx-auto sm:my-[120px] my-[40px]">
        <Image
          src="/onboarding/fire__2.svg"
          alt="Image_thumb"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center pt-[85px]  justify-center">
          <span className="text-white text-[100px] font-bold drop-shadow-md">{streakNumber}</span>
        </div>
      </div>

        <ContinueButton onClick={handleNextStep} /> 
    </div>
  );
}

export default Days
