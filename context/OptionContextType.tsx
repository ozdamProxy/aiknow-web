"use client";

import { createContext, useContext, useState, ReactNode , useEffect} from "react";

export  type Answers = {
  focus?: string;
  habit?: string;
  weekly_learning?: string;
  become?: string;
  streak?:string;
};

const OnboardingContext = createContext<{
  answers: Answers;
  setAnswers: (newAnswers: Partial<Answers>) => void;
   currentStep: number;
  setCurrentStep: (step: number) => void;
}>({
  answers: {},
  setAnswers: () => {},
   currentStep: 1,
  setCurrentStep: () => {},
});

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswersState] = useState<Answers>({});
  const [currentStep, setCurrentStep] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("currentOnboardingStep") || "1");
    }
    return 1;
  });

  const setAnswers = (newAnswers: Partial<Answers>) => {
    setAnswersState(prev => ({ ...prev, ...newAnswers }));
  };

  useEffect(() => {
    localStorage.setItem("currentOnboardingStep", currentStep.toString());
  }, [currentStep]);

  return (
    <OnboardingContext.Provider value={{ answers, setAnswers, currentStep, setCurrentStep }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);