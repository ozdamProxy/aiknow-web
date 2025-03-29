"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useOptionContext } from "@/context/OptionContextType";


interface OptionProps {
    isCommitted: boolean;
    setIsCommitted: (value: boolean) => void; 
    title: string;
    options: string[];
    step:string
  }
  
    const ComitmentPact:React.FC<OptionProps> = ({isCommitted, setIsCommitted,title,options,step}) => {

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();
    const [isPressing, setIsPressing] = useState(false); // uzun basılıp basılmadığını takip etmek için
    const { selectedHabit, selectedBecome } = useOptionContext();

    console.log(`selected habit ${selectedHabit} become ${selectedBecome}`)

    const handleNextStep = () => {
      router.push(`/onboarding/${parseInt(step) + 1}`);  
    };

    const handleLongPressStart = () => {
        setIsPressing(true); // uzun basma başladığında, isPressing'i true yapıyoruz
        timerRef.current = setTimeout(() => {
          setIsCommitted(true); // committed durumunu başlatıyoruz
          setTimeout(() => {
            handleNextStep(); // 2 saniye sonra handleNextStep fonksiyonunu çağırıyoruz
          }, 3000);
        }, 1000); // 1 saniye basılı
      };

    const handleLongPressEnd = () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
       
    };    
  
      return (
        <div className="relative w-full h-screen ">
          {/* Normal İçerik */}
          <div className={`pt-[20px] transition-opacity duration-700 items-center flex flex-col flex-col justify-center ${isCommitted ? "opacity-0" : "opacity-100"}`}>
            <h3 className="text-xl text-black font-semibold leading-[37px] text-center mb-[30px]">
              Commitment pact
            </h3>
            <div className="bg-[#F3F3F3] border border-[#AEAEAE] rounded-lg p-[20px] w-[350px]">
              <p className="text-black font-normal text-sm">
                I want to <span className="font-bold">{selectedHabit}</span> every day by learning{" "}
                <span className="font-bold">7 summaries per week,</span> helping me become a{" "}
                <span className="font-bold">{selectedBecome}</span>.
                <br />
                <br />
                I commit to my goals.
                <br />
                <br />
                And I trust “I Know” to guide me along the way and help me accomplish all my resolutions.
              </p>
            </div>
    
            <Image src="/onboarding/top-.svg" alt="Image_sum" width={350} height={50} className="rounded-lg mt-[20px]" />
            <div className="w-[350px] flex items-center justify-center">
            <Image
              src="/onboarding/print.svg"
              alt="Image_sum"
              width={73}
              height={73}
              className="rounded-lg mt-[20px] cursor-pointer"
              onMouseDown={handleLongPressStart}
              onTouchStart={handleLongPressStart}
              onMouseUp={handleLongPressEnd}
              onTouchEnd={handleLongPressEnd}
            />
            </div>
           
          </div>
    
          {/* Committed Ekranı */}
          {isCommitted && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#F7C663] transition-all duration-700">
              <p className="text-xl font-bold text-black animate-pulse">Yay, Committed!</p>
            </div>
          )}
        </div>
      );
    
}
export default ComitmentPact