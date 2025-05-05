"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
import { useOptionContext } from "@/context/OptionContextType";
import { log } from "console";

interface OptionProps {
  title: string;
  options: string[];
  step:string
}

const Habit:React.FC<OptionProps> = ({title,options,step}) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);  
  const router = useRouter();  
  const { selectedHabit, setHabit, selectedBecome, setBecome } = useOptionContext();


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
        <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[10px] sm:mb-[25px]">Aspiration</h3> 

        <p className="text-[20px] text-black font-semibold leading-[37px] text-center mb-[25px]">
        {step === "9"
          ? "We’ll help you develop it with our features" 
          : step === "11"
          ? "It can be a title, a characteristic, or definition that motivates you" 
          : ""}
        </p> 

        <p className="text-[14px] lg:text-[20px]  text-black font-normal text-center mb-[10px] w-[330px] lg:w-[430px] px-[15px] py-[10px] bg-[#FEBE5826] rounded-[30px] border border-[#FEBE58]">
        {step === "9"
          ? "What habit you want to create?" 
          : step === "11"
          ? "What do you want to become?" 
          : ""}

        </p>
      
        <p className="text-sm text-black font-normal text-start w-[350px] mx-auto">
          {step === "8" ? " I want to" : step === "10" ? "I want to become" : ""}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 mt-5">
          {options.map((option, index) => (
            <button
              key={index}
              className={`
                w-full py-4 text-center text-sm lg:text-xl font-medium text-black px-[10px]
                border-2 border-[#F7C663] rounded-lg transition-all duration-300
                ${selectedOption === option ? 'bg-[#FFFFFF]' : ''}
                hover:bg-[#F7C663] hover:border-[#F7C663]
              `}
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