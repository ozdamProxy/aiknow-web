"use client";

import { useState } from "react";
import ImageGrid from "./ImagesGrid";
import { useRouter } from "next/navigation"
import ContinueButton from "./ContinueButton";
interface OptionProps {
  title: string;
  options: string[];
  step:string;
  type:String
}

const ChooseTitle:React.FC<OptionProps> = ({title,options,step,type}) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);  
  const router = useRouter();  

  const handleOptionClick = () => {
    
    router.push(`/onboarding/${parseInt(step) + 1}`);  
  };

  return (
  
      <div className="w-full mt-[70px] items-center justify-items-center  ">
     
             <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[10px] sm:mb-[25px]">Like Time</h3> 
     
             <h3 className="sm:text-[20px] text-[18px] mx-[20px] text-black font-regular  sm:font-medium text-center">Choose 3+ titles you’ve read or are interested in</h3>
            
             <div className="flex items-center justify-center gap-3 mt-[40px] mx-[20px]">
     
             <ImageGrid />
     
             </div>

              <ContinueButton onClick={handleOptionClick} /> 
     
         </div>
    );

}
export default ChooseTitle;