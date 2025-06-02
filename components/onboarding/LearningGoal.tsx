"use client";

import { useRef,useState,useEffect } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";
import ContinueButton from "./ContinueButton";
import { useOnboarding } from "@/context/OptionContextType"; // yol senin yapına göre değişebilir
import { Answers } from "@/context/OptionContextType";


interface OptionProps {
  title: string;
  options: string[];
  step:string
}

const LearningGoal:React.FC<OptionProps> = ({title,options,step}) => {

  const router = useRouter();  
  const { answers, setAnswers,currentStep,setCurrentStep } = useOnboarding();


  useEffect(() => {

      if (parseInt(step) > currentStep) {
        router.replace(`/onboarding/${currentStep}`);
        return;  
      }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = containerRef.current.scrollTop; // Y ekseni kaydırma
      const itemHeight = containerRef.current.scrollHeight / numbers.length;
      const centerIndex = Math.round(scrollY / itemHeight) + 2; // Ortadaki index hesapla

      setActiveIndex(Math.min(Math.max(centerIndex, 0), numbers.length - 1));
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1); // 1-10 arası sayılar
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleOptionClick = () => {
   
    const updates: Partial<Answers> = {};
       updates.weekly_learning = numbers[activeIndex].toString()
       setAnswers(updates);
        setCurrentStep(parseInt(step) + 1);
    router.push(`/onboarding/${parseInt(step) + 1}`);  
    
  };

  return (
  
      <div className="w-full flex flex-col items-center justify-items-center mt-[50px]">
        <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[25px]">{title}</h3> 
        <p className="text-[14px]  lg:text-[20px]  text-black font-normal text-center mb-[10px] w-[330px] lg:w-[430px] px-[15px] py-[10px] bg-[#FEBE5826] rounded-[30px] border border-[#FEBE58]">
            Small steps will help you achieve it faster
        </p>
        <div className="space-y-4 w-[350px] py-4 mt-[20px] flex items-center justify-center border border-[2px] border-[#F7C663] rounded-[30px]"> 
           <Image
                src="/onboarding/summaries.svg"
                alt={`Image_sum`}
                width={108}
                height={71}
                objectFit="cover"
                className="rounded-lg"
            />
            <div className="flex items-center max-h-[200px] mb-[15px] ">
                <div
                    ref={containerRef}
                    className=" w-[100px] gap-[10px] max-h-[200px] flex flex-col overflow-y-auto scroll-smooth snap-y snap-mandatory [&::-webkit-scrollbar]:hidden hide-scrollbar"
                >
                    {numbers.map((num, index) => (
                    <div
                        key={num}
                        className={`h-[50px] flex items-center justify-center text-2xl max-h-[150px] font-semibold snap-center transition-colors duration-300 
                        ${index === activeIndex ? "text-[#F7C663] scale-110" : "text-[#F7C663B2] opacity-50"}`}
                    >
                        {num}
                    </div>
                    ))}
                </div>
            </div>
            <p className="font-bold text-[#F7C663] text-base mb-[15px]">summaries</p>
        </div>
         <ContinueButton onClick={handleOptionClick} /> 
      </div>
    );

}
export default LearningGoal;