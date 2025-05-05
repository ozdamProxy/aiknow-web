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
          <h3 className="text-[18px] sm:text-[24px] lg:text-[40px] text-black font-medium leading-[37px] text-center mb-[10px] sm:mb-[25px]">PAYWALL</h3> 
      </div>
    );

}
export default Options;