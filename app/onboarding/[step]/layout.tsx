"use client";

import ProgressBar from "@/components/onboarding/ProgressBar";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import { usePathname } from "next/navigation";
import componentsMap from "@/utils/onboardingMap";  // Haritayı burada import ediyoruz
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { OptionProvider } from "@/context/OptionContextType";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

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
          <StepComponent isCommitted={isCommitted} setIsCommitted={setIsCommitted} title={title} options={options} step={step}/>
        </motion.div>
      <div className="flex-1">{children}</div>
    </div>
    </OptionProvider>
    );
  }