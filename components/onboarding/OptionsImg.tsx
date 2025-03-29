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
  
    <div className="w-full mt-[70px] items-center justify-items-center">
    <h3 className="text-2xl text-black font-semibold leading-[37px] text-center">{title}</h3> 
    <div className="space-y-4 w-[350px] py-4 mt-[30px]"> 
    {ideasList.map((item, index) => ( 
        <button
          key={index}
          className={`w-full py-2 text-sm flex items-center gap-3 text-start ps-[15px] font-normal text-black bg-[#F3F3F3] border border-[#AEAEAE] rounded-lg transition-all duration-300
            ${selectedOption === item.title ? 'bg-[#FFF6E6] border-[#F7C663]' : ''} 
            hover:border-[#F7C663] hover:bg-[#FFF6E6]`
          }  
          onClick={() => handleOptionClick(item.title)}
        >
            <Image
            src={item.img}
            alt={`Image_thumb`}
            width={24}
            height={24}
            objectFit="cover"
            className="rounded-lg "
            />
          {item.title}
        </button>
      ))}
    </div>
  </div>
    );

}
export default OptionsImg