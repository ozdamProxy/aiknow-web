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
  
      <div className="w-full items-center justify-items-center mt-[70px]">
        <p className="text-sm text-black font-semibold  text-center mb-[25px]">You unlocked the Star Shooter achievement for aiming high and siting your goals</p> 
        <p className="text-sm text-black font-normal text-center mb-[10px] max-w-[350px] text-start">
        {step === "8"
          ? "We’ll help you develop it with our features" 
          : step === "10"
          ? "It can be a title, a characteristic, or definition that motivates you" 
          : ""}
        </p>
       <h3 className="text-xl text-black text-center text-start font-bold mt-[30px]">Great job</h3>
       <Image
                  src={"/onboarding/tabler_thumb-up.svg"}
                  alt={`Image_thumb`}
                  width={80}
                  height={80}
                  objectFit="cover"
                  className="rounded-lg mt-[30px]"
                />
       <ContinueButton onClick={handleOptionClick} /> 
      </div>
    );

}
export default GreatJob;