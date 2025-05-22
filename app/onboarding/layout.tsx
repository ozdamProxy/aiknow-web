"use client";

import ProgressBar from "@/components/onboarding/ProgressBar";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import { usePathname } from "next/navigation";
import componentsMap from "@/utils/onboardingMap";  // Haritayı burada import ediyoruz
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { OnboardingProvider } from "@/context/OptionContextType";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const pathname = usePathname();
    const showProgress = pathname === "/onboarding/1"; // Örnek: 1. adımdaysa göster

    const step = pathname.split("/").pop() || "1"; // Eğer step undefined ise varsayılan olarak "1" kullan
    const { component: StepComponent, title, options,type } = componentsMap[step] || {};

    const [isCommitted, setIsCommitted] = useState(false);

   

    return (
      <OnboardingProvider>
     
        <div className={`flex flex-col min-h-screen w-full mx-auto justify-center items-center min-h-screen ${step === "6" ? "bg-[#FFFFFF]" : "bg-transparent"}`}>

          {!isCommitted && <OnboardingHeader />}
          {!isCommitted  && <ProgressBar step={step} />}

            <motion.div
              key={step} // her adımda animasyonun doğru şekilde uygulanabilmesi için key kullanıyoruz
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} // Animasyon süresi
              className="flex-1"
            >
              
              <StepComponent isCommitted={isCommitted} setIsCommitted={setIsCommitted} title={title} options={options} step={step} type={type}/>
            
            </motion.div>

          <div className="flex-1">{children}</div>
        </div>
        </OnboardingProvider>
    
    );
  }