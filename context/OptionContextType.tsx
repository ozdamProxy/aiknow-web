"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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
}>({
  answers: {},
  setAnswers: () => {},
});

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswersState] = useState<Answers>({});

  const setAnswers = (newAnswers: Partial<Answers>) => {
    setAnswersState(prev => ({ ...prev, ...newAnswers }));
  };

  return (
    <OnboardingContext.Provider value={{ answers, setAnswers }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);