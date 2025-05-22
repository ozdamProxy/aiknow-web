"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";
import ideasList from "@/utils/ideasList";


interface OptionProps {
  title: string;
  options: string[];
  step:string
}



const OptionsImg:React.FC<OptionProps> = ({title,options,step}) => {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);  
    const router = useRouter();  
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      router.push(`/onboarding/${parseInt(step) + 1}`);  
    };

  return (
  
    <div className="w-full mt-[70px] flex flex-col items-center justify-items-center">
    <h3 className="lg:text-[40px] text-[24px] text-black font-medium leading-[37px] text-center mb-[10px] sm:mb-[25px]">Like Time</h3> 
    <h6 className="text-[18px] sm:text-[24px] text-black font-medium lg:font-semibold leading-[37px] text-center">{title}</h6> 
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 mt-5">
    {ideasList.map((item, index) => ( 
        <button
          key={index}
          className={` lg:min-w-[430px] min-w-[310px]
            w-full py-4 text-center text-sm lg:text-xl font-medium text-black px-[10px]
            border-2 border-[#F7C663] rounded-lg transition-all duration-300
            ${selectedOption === item.title ? 'bg-[#FFFFFF]' : ''}
            hover:bg-[#F7C663] hover:border-[#F7C663]
             ${index === ideasList.length - 1 && ideasList.length % 2 !== 0 ? 
          'sm:col-span-2 sm:mx-auto sm:w-1/2' : ''}
          `}
          onClick={() => handleOptionClick(item.title)}
        >
          
          {item.title}
        </button>
      ))}
    </div>
  </div>
    );

}
export default OptionsImg