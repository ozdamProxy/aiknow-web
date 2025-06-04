import { useState } from "react";
import { FlameIcon, ChevronDown } from "lucide-react";

export default function StreakCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white rounded-[24px] border border-[#E0E0E0] py-[16px] px-[12px] max-w-[800px]">
      <div className="relative">
        <div className="flex items-center text-black font-medium gap-2 text-xl">
          <FlameIcon size={30} color="red" />
          You're on a 3-day streak!
        </div>
        <ChevronDown
          size={30}
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <p className="text-[16px] font-normal text-[#666666] mt-4">
        Keep up the momentum and unlock badges.
      </p>

      {/* Yumuşak açılıp kapanan alan */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[17px] font-medium text-black">This Week:</p>
        <div className="flex items-center mt-2">
          <div className="w-3 h-3 rounded-full bg-[#F6BD49] mr-2" />
          <p className="text-[16px] font-normal text-black">12 Key Points Learned</p>
        </div>
        <div className="flex items-center mt-2">
          <div className="w-3 h-3 rounded-full bg-[#F6BD49] mr-2" />
          <p className="text-[16px] font-normal text-black">48 Minutes Read</p>
        </div>
      </div>
    </section>
  );
}
