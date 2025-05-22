"use client";
import Image from "next/image"; 
import ContinueButton from "./ContinueButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Onboarding5() {

    const router = useRouter();

    const [imageSrc, setImageSrc] = useState("/onboarding/arrow_.svg");

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 640) { // sm breakpoint (640px)
            setImageSrc("/onboarding/arrow_down.svg");
          } else {
            setImageSrc("/onboarding/arrow_.svg");
          }
        }
    
        // İlk yüklemede kontrol et
        handleResize();
        
        // Ekran boyutu değiştiğinde kontrol et
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    const handleNextStep = () => {
        router.push(`/onboarding/6`)
      };

  return (
    <div className="w-full my-[18px] flex flex-col items-center justify-items-center mt-[40px] ">
        <h3 className="text-[18px] sm:text-[24px] lg:text-[40px] text-black font-medium  text-center ">Aspiration</h3>
        <h3 className="text-[14px]   sm:text-[16px] lg:text-[22px] text-black font-medium text-center px-[15px] mt-[10px]">“I Know” helps you reach your goals efficiently with bite-sized summaries</h3>


        <div className=" flex-col flex sm:flex-row  items-center justify-items-center gap-3 mt-[30px]">

            <div className="items-center flex-col  border-2 border-[#F7C663] rounded-3xl  px-[15px] 
                w-[180px] h-[180px] 
                sm:w-[227px] sm:h-[227px]
                lg:w-[330px] lg:h-[330px]
            ">
                <Image
                src="/onboarding/typical_book.svg"
                alt="Next.js logo"
                width={110}
                height={70}
                className="sm:w-[150px] sm:h-[95px] lg:w-[208px] lg:h-[132px] mx-auto
                lg:mt-[30px] sm:mt-[20px]"
                priority
                />
                <h6 className="text-[15px] sm:text-[20px]  lg:text-[30px] font-semibold text-black rad">Typical Book</h6>
                <p className="text-[11px] sm:text-[14px] lg:text-[20px] font-semibold text-black">300+ pages</p>
                <p className="text-[11px] sm:text-[14px] lg:text-[20px] font-semibold text-black">8-10 hours</p>
                <p className="text-[11px] sm:text-[14px] lg:text-[20px] font-semibold text-black">Read only</p>
            </div>

            <Image
                src={imageSrc}
                alt="Next.js logo"
                width={72}
                height={57}
                className="sm:w-[115px] sm:h-[75px] lg:w-[150px] lg:h-[97px] mx-auto
                lg:mt-[30px] sm:mt-[20px]"
                priority
                />

            <div className="items-center flex-col border-2 border-[#F7C663] rounded-3xl px-[15px]
                w-[180px] h-[180px] 
                sm:w-[227px] sm:h-[227px]
                lg:w-[330px] lg:h-[330px]">
                <Image
                src="/onboarding/summary.svg"
                alt="Next.js logo"
                width={90}
                height={90}
                className="sm:w-[115px] sm:h-[px] lg:w-[168px] lg:h-[168px] mx-auto"
                priority
                />
                <h6 className="text-[15px] sm:text-[20px] lg:text-[30px] font-semibold text-black">Book Summary</h6>
                <p className="text-[11px] sm:text-[14px] lg:text-[20px] font-semibold text-black">Key ideas</p>
                <p className="text-[11px] sm:text-[14px] lg:text-[20px] font-semibold text-black" >15 minutes</p>
                <p className="text-[11px] sm:text-[14px] lg:text-[20px] font-semibold text-black">Listen and read</p>
            </div>

        </div>

         <ContinueButton onClick={handleNextStep} /> 
       
    </div>
  );
}
