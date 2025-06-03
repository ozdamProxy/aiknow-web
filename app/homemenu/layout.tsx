"use client";

import ProgressBar from "@/components/onboarding/ProgressBar";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import { usePathname } from "next/navigation";
import componentsMap from "@/utils/onboardingMap";  // Haritayı burada import ediyoruz
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { OnboardingProvider } from "@/context/OptionContextType";
import HeaderHome from "@/components/home/Header"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {



    return (
     
     
        <div className="min-h-screen w-full flex bg-white">
    
            <HeaderHome />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 overflow-auto"
            >
              {children}
            </motion.div>
        </div>
     
    
    );
  }