"use client";

import type { ReactNode } from 'react';
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ProgressBar from "@/components/onboarding/ProgressBar";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import componentsMap from "@/utils/onboardingMap";
import { OptionProvider } from "@/context/OptionContextType";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: LayoutProps) {

    const pathname = usePathname();
    const showProgress = pathname === "/onboarding/1"; // Örnek: 1. adımdaysa göster

    const step = pathname.split("/").pop() || "1"; // Eğer step undefined ise varsayılan olarak "1" kullan
    const { component: StepComponent, title, options } = componentsMap[step] || {};

    const [isCommitted, setIsCommitted] = useState(false);

    return (
      <OptionProvider>
      <div className={`flex flex-col min-h-screen ${step === "6" ? "bg-[#FFFAF0]" : "bg-transparent"}`}>

        {!isCommitted && <OnboardingHeader />}
        {!isCommitted && step !== "1" && <ProgressBar step={step} />}
        <motion.div
          key={step} // her adımda animasyonun doğru şekilde uygulanabilmesi için key kullanıyoruz
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Animasyon süresi
          className="flex-1"
        >
          {StepComponent && (
            <StepComponent 
              isCommitted={isCommitted} 
              setIsCommitted={setIsCommitted} 
              title={title} 
              options={options} 
              step={step}
            />
          )}
        </motion.div>
      <div className="flex-1">{children}</div>
    </div>
    </OptionProvider>
    );
  }