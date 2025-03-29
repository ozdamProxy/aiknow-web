"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface OptionProps {
  title: string;
  options: string[];
  step: string;
}

const Days: React.FC<OptionProps> = ({ title, options, step }) => {
  const router = useRouter();

  const handleNextStep = () => {
    router.push(`/onboarding/${parseInt(step) + 1}`); 
  };

  return (
    <div className="w-full mt-[70px] items-center justify-items-center ">

      <h3 className="text-xl text-black font-semibold text-center">21 days may be a great start to build a habit</h3>
       <Image
                  src="/onboarding/days.svg"
                  alt={`Image_thumb`}
                  width={91}
                  height={150}
                  objectFit="cover"
                  className="rounded-lg mt-[20px]"
                  />

        <p className="my-[30px] text-sm text-black font-normal text-center px-[10px]">Notification will help you stay on track and push you to achieve your goals</p>
        <ContinueButton onClick={handleNextStep} /> 
    </div>
  );
}

export default Days
