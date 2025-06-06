"use client";

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation"
import { log } from "console";
import { useOnboarding } from "@/context/OptionContextType"; // yol senin yapına göre değişebilir
import type { Answers } from "@/context/OptionContextType"; // Import the type
import mixpanel from "@/utils/mixPanel";


interface OptionProps {
  title: string;
  options: string[];
  step:string
}

const Habit:React.FC<OptionProps> = ({title,options,step}) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);  
  const router = useRouter();  
  const { answers, setAnswers, currentStep, setCurrentStep } = useOnboarding();
  const [canNavigate, setCanNavigate] = useState(false);  // yönlendirme izni

  useEffect(() => {
    if (parseInt(step) > currentStep) {
    router.replace(`/onboarding/${currentStep}`);
    return;  
  }


      console.log(`answer =>>> ${answers.focus} ${answers.become} ${answers.habit}`)
      if (canNavigate) {
        setCurrentStep(currentStep + 1);
        router.push(`/onboarding/${parseInt(step) + 1}`);
      }
    }, [answers]); 

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

      
   if(step=="9"){
     mixpanel.track('ob_habit', {
      habit_option: option,
    });
   }else if(step=="11"){
     mixpanel.track('ob_become', {
      become_option: option,
    });
   }

    const updates: Partial<Answers> = {};
    if (step === "9") updates.focus = option;
    if (step === "11") updates.become = option;
   
    setAnswers(updates);
    setCanNavigate(true); 
  };

  return (
  
      <div className="w-full items-center  flex flex-col justify-items-center mt-[50px]">
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