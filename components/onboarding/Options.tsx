"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
interface OptionProps {
  title: string;
  options: string[];
  step:string;
  type: string;
}

const Options:React.FC<OptionProps> = ({title,options,step,type}) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);  
  const router = useRouter();  

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    router.push(`/onboarding/${parseInt(step) + 1}`);  
  };

  return (
  
      <div className="w-full mt-[70px] items-center justify-items-center">
          <h3 className="text-[18px] sm:text-[24px] lg:text-[40px] text-black font-medium leading-[37px] text-center mb-[10px] sm:mb-[25px]">{type}</h3> 

          <p className="text-[20px] text-black font-semibold leading-[37px] text-center mb-[25px]">
          {title}
          </p> 

          <p className="text-[14px] lg:text-[20px]  min-w-[300px] text-black font-normal text-center mb-[10px] lg:min-w-[430px] px-[15px] py-[10px] bg-[#FEBE5826] rounded-[30px] border border-[#FEBE58]">
          {step === "9"
            ? "What habit you want to create?" 
            : "We'll help you develop it with our features"
            }

          </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 mt-5">
          {options.map((option, index) => (
            <button
              key={index}
              className={` lg:min-w-[430px] min-w-[310px]
                w-full py-4 text-center text-sm lg:text-xl font-medium text-black px-[10px]
                border-2 border-[#F7C663] rounded-lg transition-all duration-300 curspr-pointer
                ${selectedOption === option ? 'bg-[#FFFFFF]' : ''}
                hover:bg-[#F7C663] hover:border-[#F7C663]
                  ${index === options.length - 1 && options.length % 2 !== 0 ? 
                  'sm:col-span-2 sm:mx-auto sm:w-1/2' : ''}
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
export default Options;