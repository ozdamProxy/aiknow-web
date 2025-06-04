"use client";
import Image from "next/image"; 
import ContinueButton from "./ContinueButton";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboarding } from "@/context/OptionContextType"; // yol senin yapına göre değişebilir
import { log } from "console";
import mixpanel from "@/utils/mixPanel";


interface OptionProps {
  title: string;
  options: string[];
  step:string
}

const Onboarding6:React.FC<OptionProps> = ({title,options,step}) => {

    const router = useRouter();
    const { answers, setAnswers , currentStep,setCurrentStep} = useOnboarding();


      if (parseInt(step) > currentStep) {
        router.replace(`/onboarding/${currentStep}`);
        return;  
      }

      useEffect(() => {

      if (parseInt(step) > currentStep) {
        router.replace(`/onboarding/${currentStep}`);
        return;  
      }},[])

    const handleNextStep = () => {
        mixpanel.track('ob_listening', {
    });
     setCurrentStep(8);
    router.push(`/onboarding/8`); 
      
      };

  return (
    <div className="w-full flex flex-col my-[18px] items-center justify-items-center mt-[40px] h-full ">

                <Image
                src="/onboarding/listen_msc.svg"
                alt="Next.js logo"
                width={327}
                height={327}
                priority
                className="sm:w-[421px] sm:h-[421px]  mx-auto
                lg:mt-[30px] sm:mt-[20px] z-40"
                />

        <h3 className="text-[14px] sm:text-xl mx-[15px] text-black font-semibold  text-center">And you can grow on the go by listening to audio summaries</h3>

        <ContinueButton onClick={handleNextStep} /> 
         
    </div>
  );
}

export default Onboarding6
