"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";
import goalsList from "@/utils/goalMap";
import ContinueButton from "./ContinueButton";

interface OptionProps {
  title: string;
  options: string[];
  step: string;
}

const CheckBox: React.FC<OptionProps> = ({ title, options, step }) => {
  const router = useRouter();  

  const [checkedItems, setCheckedItems] = useState(
    new Array(goalsList.length).fill(false) // Başlangıçta tüm değerler false (seçilmemiş)
  );

  const selectedCount = checkedItems.filter((checked) => checked).length;

  const handleCheckboxChange = (index: number) => {
    if (selectedCount >= 3 && !checkedItems[index]) return;

    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleNextStep = () => {
    router.push(`/onboarding/${parseInt(step) + 1}`);  
  };

  return (
  
      <div className="w-full  items-center justify-items-center">
        <h3 className="text-2xl text-black font-semibold leading-[37px] text-center">What's your goal?</h3> 
        <p className="text-sm text-black font-regular mt-[20px] px-[15px] text-center">Choose up to 3 goals. You can always change goals when they become irrelevant. </p>
        <div className="w-[350px] py-4 mt-[30px]  
                        grid grid-cols-1 md:grid-cols-2 gap-4
                        md:w-[700px] "> 
          {goalsList.map((item, index) => (
        <div
          key={index}
          className={`w-full flex items-center justify-between py-2 gap-[10px] text-sm text-start px-[15px] font-normal text-black border rounded-lg transition-all duration-300 
          ${checkedItems[index] ? 'bg-[#FFF6E6] border-[#F7C663]' : 'bg-[#F3F3F3] border-[#AEAEAE]'}`}
        >
          <div className="flex items-center gap-2">
            <Image
              src={item.img}
              alt="Next.js logo"
              width={20}
              height={20}
              priority
            />
            <p className="text-black text-base font-normal">{item.title}</p>
          </div>

          {/* Checkbox */}
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            checked={checkedItems[index]}
            onChange={() => handleCheckboxChange(index)}
            className="hidden"
          />
          <label
            htmlFor={`checkbox-${index}`}
            className={`w-5 h-5 border rounded-[4px] transition-all duration-300  cursor-pointer 
              ${checkedItems[index] ? "bg-[#F7C663] border-[#F7C663]" : "bg-white border-gray-400"}`}
          ></label>
        </div>
      ))}
        </div>
        <button
            onClick={handleNextStep}
            disabled={selectedCount === 0}
            className="mt-[30px] w-[350px] h-[55px] bg-[#F7C663] text-white font-semibold text-lg rounded-[15px] flex items-center justify-center text-base font-bold transition hover:bg-[#eab24d] active:scale-95"
            >
            Continue
            </button>
      </div>
    );

}
export default CheckBox