"use client"

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type ProgressBarProps = {
  step: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const step_ = parseInt(step);
  
  // 7 progress bar için state'ler
  const [progress1, setProgress1] = useState("0%");
  const [progress2, setProgress2] = useState("0%");
  const [progress3, setProgress3] = useState("0%");
  const [progress4, setProgress4] = useState("0%");
  const [progress5, setProgress5] = useState("0%");
  const [progress6, setProgress6] = useState("0%");
  const [progress7, setProgress7] = useState("0%");

  const getProgressWidth = (start: number, end: number): string => {
    const completedSteps = Math.min(Math.max(step_ - start + 1, 0), end - start + 1);
    return `${(completedSteps / (end - start + 1)) * 100}%`;
  };

  useEffect(() => {
    // Her bir segment için progress değerlerini güncelle
    setProgress1(getProgressWidth(2, 4));    // Segment 1: Adım 2-4
    setProgress2(getProgressWidth(5, 8));    // Segment 2: Adım 5-8
    setProgress3(getProgressWidth(9, 12));   // Segment 3: Adım 9-12
    setProgress4(getProgressWidth(13, 16));  // Segment 4: Adım 13-16
    setProgress5(getProgressWidth(17, 19));  // Segment 5: Adım 17-19
    setProgress6(getProgressWidth(20, 22));  // Segment 6: Adım 20-22
    setProgress7(getProgressWidth(23, 25));  // Segment 7: Adım 23-25
  }, [step]);

  return (
    <div className="items-center justify-center flex w-full px-[15px] sm:px-[40px] mt-[20px]">
      {/* 1. Nokta */}
      <div className="w-[15px] h-[15px] bg-[#F7C663] rounded-full" />
      
      {/* 1. Progress Bar */}
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: getProgressWidth(2, 4) }}
          animate={{ width: progress1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* 2. Nokta */}
      <div className={`w-[15px] h-[15px] rounded-full ${step_ <= 4 ? "bg-[#F3F3F3]" : "bg-[#F7C663]"}`} />
      
      {/* 2. Progress Bar */}
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: step_ > 4 ? getProgressWidth(5, 8) : "0%" }}
          animate={{ width: progress2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* 3. Nokta */}
      <div className={`w-[15px] h-[15px] rounded-full ${step_ <= 8 ? "bg-[#F3F3F3]" : "bg-[#F7C663]"}`} />
      
      {/* 3. Progress Bar */}
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: step_ > 8 ? getProgressWidth(9, 12) : "0%" }}
          animate={{ width: progress3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* 4. Nokta */}
      <div className={`w-[15px] h-[15px] rounded-full ${step_ <= 12 ? "bg-[#F3F3F3]" : "bg-[#F7C663]"}`} />
      
      {/* 4. Progress Bar */}
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: step_ > 12 ? getProgressWidth(13, 16) : "0%" }}
          animate={{ width: progress4 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* 5. Nokta */}
      <div className={`w-[15px] h-[15px] rounded-full ${step_ <= 16 ? "bg-[#F3F3F3]" : "bg-[#F7C663]"}`} />
      
      {/* 5. Progress Bar */}
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: step_ > 16 ? getProgressWidth(17, 19) : "0%" }}
          animate={{ width: progress5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* 6. Nokta */}
      <div className={`w-[15px] h-[15px] rounded-full ${step_ <= 19 ? "bg-[#F3F3F3]" : "bg-[#F7C663]"}`} />
      
      {/* 6. Progress Bar */}
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: step_ > 19 ? getProgressWidth(20, 22) : "0%" }}
          animate={{ width: progress6 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* 7. Nokta */}
      <div className={`w-[15px] h-[15px] rounded-full ${step_ <= 22 ? "bg-[#F3F3F3]" : "bg-[#F7C663]"}`} />
      
      {/* 7. Progress Bar */}
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: step_ > 22 ? getProgressWidth(23, 25) : "0%" }}
          animate={{ width: progress7 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* Son Nokta */}
      <div className="w-[15px] h-[15px] bg-[#F3F3F3] rounded-full" />
    </div>
  );
};

export default ProgressBar;
