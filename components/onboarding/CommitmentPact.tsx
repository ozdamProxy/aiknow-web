"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useOnboarding } from "@/context/OptionContextType"; // yol senin yapına göre değişebilir



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
    const { answers, setAnswers } = useOnboarding();

    console.log(`${answers.become}`)

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
        <div className="relative w-screen min-h-screen">
          {/* Normal İçerik */}
          <div className={`pt-[20px] transition-opacity duration-700 items-center flex flex-col flex-col justify-center ${isCommitted ? "opacity-0" : "opacity-100"}`}>
          <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[10px] sm:mb-[25px]">Aspiration</h3> 
            <p className="text-[20px] text-black font-semibold leading-[37px] text-center mb-[25px]">
            Commitment pact
            </p> 
            <div className="bg-[#FEBE5826] border border-[#F7C663] rounded-lg p-[20px] w-[350px]">
              <p className="text-black font-normal text-sm">
                I want to <span className="font-bold">{answers.focus}</span> every day by learning{" "}
                <span className="font-bold">{answers.weekly_learning} summaries per week,</span> helping me become a  
                <span className="font-bold"> {answers.become}</span>.
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
              src="/onboarding/commit_btn.svg"
              alt="Image_sum"
              width={273}
              height={273}
              className="rounded-lg mt-[0px] sm:mt-[20px] cursor-pointer"
              onMouseDown={handleLongPressStart}
              onTouchStart={handleLongPressStart}
              onMouseUp={handleLongPressEnd}
              onTouchEnd={handleLongPressEnd}
            />
            </div>
           
          </div>
    
          {/* Committed Ekranı */}
          {isCommitted && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#F7C663] transition-all duration-700">
                <Image
                  src="/onboarding/reading_glass.svg"
                  alt="Image_sum"
                  width={330}
                  height={235}
                  className="rounded-lg mt-[0px] sm:mt-[20px]"
                />
              <p className="text-xl font-bold text-black animate-pulse">Yes Committed!</p>
            </div>
          )}
        </div>
      );
    
}
export default ComitmentPact