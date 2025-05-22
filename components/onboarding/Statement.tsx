"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ContinueButton from "./ContinueButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface OptionProps {
    title: string;
    options: string[];
    step:string
  }

  const Statement:React.FC<OptionProps> = ({title,options,step}) => {

    const router = useRouter();

   
const handleNextStep = () => {
  

  // if (parseInt(step) === 19) {
  
  //   const randomUserId = crypto.randomUUID()
    
  
  //   const revenueCatUrl = `https://pay.rev.cat/sandbox/rcvtknwdvodrozjs/200`;
   
  //   console.log(`uuid ${randomUserId}`)
  //   window.location.href = revenueCatUrl;
    
  // } else {
    router.push(`/onboarding/${parseInt(step) + 1}`);
  // }
};
 

  return (
    <div className="w-full mt-[70px] items-center justify-items-center  ">

        <h3 className="text-2xl text-black font-semibold leading-[37px] text-center mb-[10px] sm:mb-[25px]">Like Time</h3> 

        <h3 className="sm:text-[20px] text-[18px] text-black font-regular  sm:font-medium text-center">Do you relate to this statement?</h3>
        <div
            className={`flex min-w-[320px] bg-[#FEBE5826] sm:max-w-[540px] rounded-lg mx-[15px] p-[20px] mt-[30px] gap-3 border border-[#F7C663]
                `}
        >
             <Image
                        src={`/onboarding/star__.svg`}
                        alt={`Image_`}
                        width={36}
                        height={36}
                      />
            <p className="text-black lg:text-[28px] text-[20px] font-normal  text-center">{title}</p>
            <Image
                        src={`/onboarding/star__.svg`}
                        alt={`Image_`}
                        width={36}
                        height={36}
                      />
        </div>

        <div className="flex items-center justify-center gap-3 mt-[40px]">

            <div className="flex-col flex  duration-300 gap-2 cursor-pointer hover:bg-[#FFF6E6] items-center justify-center w-[150px] bg-[#E6E6E629] py-[10px] border border-[#F7C663] rounded-lg"
                onClick={()=>handleNextStep()}>
                    <Image
                    src={`/onboarding/yes.svg`}
                    alt={`Image_`}
                    width={49}
                    height={49}
                    objectFit="cover"
                />
                <p className="font-semibold text-[20px] text-black">Yes</p>
            </div>

            <div className="flex-col flex  hover:bg-[#FFF6E6]  gap-2 items-center justify-center w-[150px] py-[10px] bg-[#E6E6E629] border border-[#F7C663] rounded-lg"
            onClick={()=>handleNextStep()}>
            <Image
                src={`/onboarding/no.svg`}
                alt={`Image_`}
                width={49}
                height={49}
                objectFit="cover"
            />
            <p className="font-semibold text-[20px] text-black">No</p>
            </div>
        </div>

    </div>
  );
}

export default Statement
