"use client";
import Image from "next/image"; 
import ContinueButton from "./ContinueButton";
import { useRouter } from "next/navigation";

export default function Onboarding5() {
    const router = useRouter();

    const handleNextStep = () => {
        router.push(`/onboarding/6`)
      };

  return (
    <div className="w-full my-[18px] items-center justify-items-center mt-[40px]">
        <h3 className="text-xl text-black font-semibold  text-center">“I Know” helps you reach your goals efficiently with bite-sized summaries</h3>

        <div className="flex items-center justify-items-center gap-3 mt-[30px]">

            <div className="items-center flex-col ">
                <Image
                src="/onboarding/boooks.svg"
                alt="Next.js logo"
                width={124}
                height={32}
                priority
                />
                <h6 className="text-[15px] text-black font-bold ">Typical Book</h6>
                <p className="text-[10px] text-black font-semibold">300+ pages</p>
                <p className="text-[10px] text-black font-semibold">8-10 hours</p>
                <p className="text-[10px] text-black font-semibold">Read only</p>
            </div>

            <Image
                src="/onboarding/onb_arrow.svg"
                alt="Next.js logo"
                width={55}
                height={32}
                priority
                />

            <div className="items-center flex-col ">
                <Image
                src="/onboarding/books_2.svg"
                alt="Next.js logo"
                width={124}
                height={32}
                priority
                />
                <h6 className="text-[15px] text-black font-bold ">Book Summary</h6>
                <p className="text-[10px] text-black font-semibold">300+ pages</p>
                <p className="text-[10px] text-black font-semibold">8-10 hours</p>
                <p className="text-[10px] text-black font-semibold">Read only</p>
            </div>

        </div>

         <ContinueButton onClick={handleNextStep} /> 
       
    </div>
  );
}
