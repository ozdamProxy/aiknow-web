"use client";

import ProgressBar from "@/components/onboarding/ProgressBar";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import { usePathname } from "next/navigation";
import componentsMap from "@/utils/onboardingMap";  // Haritayı burada import ediyoruz
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { OptionProvider } from "@/context/OptionContextType";
import Lottie from "lottie-react";
import subscribeAnimation from "@/public/animation/paywall.json";



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
      <OptionProvider>
      <div className={`flex flex-col min-h-screen ${step === "6" ? "bg-[#FFFFFF]" : "bg-transparent"}`}>

        {!isCommitted && <OnboardingHeader />}
        {!isCommitted  && <ProgressBar step={step} />}

        <div className="w-full h-64 absolute inset-0  bg-center bg-contain ">
         <Lottie animationData={subscribeAnimation} loop={true} />
        </div>
      
        {/* <motion.div
  initial={{ y: -50 }}
  animate={{ y: 0 }}
  transition={{ 
    duration: 10,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "linear"
  }}
  className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-80 pointer-events-none"
  style={{ backgroundImage: "url('/onboarding/bg_web.png')" }}
></motion.div> */}


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
    </OptionProvider>
    );
  }