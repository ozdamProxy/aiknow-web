"use client"

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type ProgressBarProps = {
  step: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const step_ = parseInt(step);


  const [progress1, setProgress1] = useState("0%");
  const [progress2, setProgress2] = useState("0%");
  const [progress3, setProgress3] = useState("0%");

  const getProgressWidth = (start: number, end: number): string => {
    const completedSteps = Math.min(Math.max(step_ - start + 1, 0), end - start + 1);
    return `${(completedSteps / (end - start + 1)) * 100}%`;
  };

  useEffect(() => {
   

    setProgress1(getProgressWidth(2, 4));
    setProgress2(getProgressWidth(5, 16));
    setProgress3(getProgressWidth(17, 21));
  }, [step]);

  return (
    <div className="items-center justify-center flex w-full px-[15px] sm:px-[40px] mt-[20px]">
      {/* İlk Nokta */}
      <div className="w-[15px] h-[15px] bg-[#F7C663] rounded-full" />
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: getProgressWidth(parseInt(step),4) }} 
          animate={{ width: progress1 }} 
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <div className={`w-[15px] h-[15px] rounded-full ${step_ <= 3 ? " bg-[#F3F3F3]" : "bg-[#F7C663]"}`} />
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{
            width: (parseInt(step) > 4 && parseInt(step) < 16) 
              ? getProgressWidth(parseInt(step), 16) 
              : (parseInt(step) > 16 ? "100%" : "0%")
          }}          
          animate={{ width: progress2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <div className={`w-[15px] h-[15px] rounded-full ${step_ <= 16 ? " bg-[#F3F3F3]" : "bg-[#F7C663]"}`} />
      <div className="bg-[#F3F3F3] h-[3px] rounded-full flex-1 relative">
        <motion.div
          className="bg-[#F7C663] h-full rounded-full absolute left-0 top-0"
          initial={{ width: parseInt(step) > 16 ? getProgressWidth(parseInt(step), 21) : "0%"}}
          animate={{ width: progress3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <div className="w-[15px] h-[15px] bg-[#F3F3F3] rounded-full" />
    </div>
  );
};

export default ProgressBar;
