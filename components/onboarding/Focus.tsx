"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ContinueButton from "./ContinueButton";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboarding } from "@/context/OptionContextType"; // yol senin yapına göre değişebilir
import mixpanel from "@/utils/mixPanel";


export default function Focus() {

    const [step, setStep] = useState(1);
    const router = useRouter();
    const { currentStep, setCurrentStep, setAnswers } = useOnboarding();

    const handleNextStep = () => {

      mixpanel.track('ob_famous_people', {
      });

      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      router.push(`/onboarding/2`);
    };
 
    const images = [
        "/onboarding/fame_2.svg",
        "/onboarding/fame_3.png",
        "/onboarding/fame_5.svg",
        "/onboarding/fame_5.svg", 
        "/onboarding/fame_6.svg", 
        "/onboarding/fame_7.svg", 
        "/onboarding/fame_5.svg", 
        "/onboarding/fame_9.svg", 
        "/onboarding/fame_2.svg",
      ];

  return (
    <div className="w-full mt-[70px] flex flex-col items-center justify-items-center ">

      <h3 className="text-2xl text-black font-semibold leading-[37px] text-center">What is your focus right now?</h3>
      <p className="text-base text-black mt-[30px] font-bold text-center">The most famous people have <span className="text-base text-[#F7C663]">one thing</span> in common</p>
      <div className="grid grid-cols-3 gap-4 p-4 mt-[20px] mb-[40px]">
      {images.map((src, index) => (
        <div key={index} className="relative w-full aspect-square">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={100}
            height={100}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
        </div>
        <ContinueButton onClick={handleNextStep} /> 
    </div>
  );
}
