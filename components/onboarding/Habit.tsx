"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useOptionContext } from "@/context/OptionContextType";

interface OptionProps {
  title: string;
  options: string[];
  step: string;
}

const Habit = ({ title, options, step }: OptionProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);  
  const router = useRouter();  
  const { setHabit, setBecome } = useOptionContext();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    if (step == "9") {
      setHabit(option);
    } else if (step == "11") {
      setBecome(option);
    }
 
    setTimeout(() => {
      router.push(`/onboarding/${parseInt(step) + 1}`);
    }, 100);
  };

  return (
  
      <div className="w-full items-center justify-items-center mt-[50px]">
        <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[25px]">{title}</h3> 
        <p className="text-sm text-black font-normal text-center mb-[10px] max-w-[350px] text-start">
        {step === "8"
          ? "We'll help you develop it with our features" 
          : step === "10"
          ? "It can be a title, a characteristic, or definition that motivates you" 
          : ""}
        </p>
        <div className="w-[350px] h-[1px] mb-[10px] bg-black " />
        <p className="text-sm text-black font-normal text-start w-[350px] mx-auto">
          {step === "8" ? " I want to" : step === "10" ? "I want to become" : ""}
        </p>

        <div className="space-y-4 w-[350px] py-4 mt-[20px]"> 
          {options.map((option, index) => (
            <button
              key={index}
              className={`w-full py-2 text-sm  text-start ps-[15px] font-normal text-black bg-[#F3F3F3] border border-[#AEAEAE] rounded-lg transition-all duration-300
                ${selectedOption === option ? 'bg-[#FFF6E6] border-[#F7C663]' : ''} 
                hover:border-[#F7C663] hover:bg-[#FFF6E6]`
                
              }  
              onClick={() => handleOptionClick(option)}
             
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );

}
export default Habit;