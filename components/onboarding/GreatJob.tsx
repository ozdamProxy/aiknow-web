"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"
import ContinueButton from "./ContinueButton";

interface OptionProps {
  title: string;
  options: string[];
  step:string
}

const GreatJob:React.FC<OptionProps> = ({title,options,step}) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);  
  const router = useRouter();  

  const handleOptionClick = () => {
   
     router.push(`/onboarding/${parseInt(step) + 1}`);  
   
  };

  return (
  
      <div className="w-full items-center justify-items-center mt-[70px] flex flex-col">
        <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[10px] sm:mb-[25px]">Like Time</h3> 
        <p className="text-[18px] sm:text-[20px] font-normal text-black sm:font-semibold  text-center mb-[25px] px-[10px]">You unlocked the Star Shooter achievement for aiming high and siting your goals</p> 
        <p className="text-sm text-black font-normal text-center mb-[10px] max-w-[350px] text-start">
        {step === "8"
          ? "We’ll help you develop it with our features" 
          : step === "10"
          ? "It can be a title, a characteristic, or definition that motivates you" 
          : ""}
        </p>
        <p className="text-[14px] lg:text-[20px]  min-w-[300px] text-black font-normal text-center mb-[10px] lg:min-w-[430px] px-[15px] py-[10px] bg-[#FEBE5826] rounded-[30px] ">Great job</p>

       <Image
                  src={"/onboarding/great_job.svg"}
                  alt={`Image_thumb`}
                  width={258}
                  height={258}
                  objectFit="cover"
                  className="rounded-lg mt-[30px] sm:w-[385px] sm:h-[385px]"
                />
       <ContinueButton onClick={handleOptionClick} /> 
      </div>
    );

}
export default GreatJob;