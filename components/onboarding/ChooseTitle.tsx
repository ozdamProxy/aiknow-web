"use client";

import { useState,useEffect } from "react";
import ImageGrid from "./ImagesGrid";
import { useRouter } from "next/navigation"
import ContinueButton from "./ContinueButton";
import { useOnboarding } from "@/context/OptionContextType"; // yol senin yapına göre değişebilir

interface OptionProps {
  title: string;
  options: string[];
  step:string;
  type:String
}

const ChooseTitle:React.FC<OptionProps> = ({title,options,step,type}) => {

  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const router = useRouter();  
  const { answers, setAnswers , currentStep,setCurrentStep} = useOnboarding();

  useEffect(() => {
        if (parseInt(step) > currentStep) {
        router.replace(`/onboarding/${currentStep}`);
        return
      }
      }, []); 

  const handleOptionClick = () => {
    if (selectedImages.length >= 3) {
       const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      router.push(`/onboarding/${parseInt(step) + 1}`);
    } else {
      alert("Please select at least 3 books.");
    }
  };

  return (
  
      <div className="w-full mt-[70px] flex flex-col items-center justify-items-center  ">
     
             <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[10px] sm:mb-[25px]">Like Time</h3> 
     
             <h3 className="sm:text-[20px] text-[18px] mx-[20px] text-black font-regular  sm:font-medium text-center">Choose 3+ titles you’ve read or are interested in</h3>
            
             <div className="flex items-center justify-center gap-3 mt-[40px] mx-[20px]">
     
                    <ImageGrid selectedImages={selectedImages} setSelectedImages={setSelectedImages} />

             </div>

              <ContinueButton onClick={handleOptionClick} /> 
     
         </div>
    );

}
export default ChooseTitle;