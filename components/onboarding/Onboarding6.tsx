"use client";
import Image from "next/image"; 
import ContinueButton from "./ContinueButton";
import { useRouter } from "next/navigation";

export default function Onboarding6() {

    const router = useRouter();

    const handleNextStep = () => {
        router.push(`/onboarding/8`)
      };

  return (
    <div className="w-full my-[18px] items-center justify-items-center mt-[40px] h-full ">

                <Image
                src="/onboarding/listen_msc.svg"
                alt="Next.js logo"
                width={327}
                height={327}
                priority
                className="sm:w-[421px] sm:h-[421px]  mx-auto
                lg:mt-[30px] sm:mt-[20px] z-40"
                />

        <h3 className="text-[14px] sm:text-xl mx-[15px] text-black font-semibold  text-center">And you can grow on the go by listening to audio summaries</h3>

        <ContinueButton onClick={handleNextStep} /> 
         

  
    </div>
  );
}
