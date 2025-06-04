import { useState } from "react";
import Image from "next/image";
import { FlameIcon, ChevronDown, Rocket, Clock, Star } from "lucide-react";

export default function PersonalizedCard() {
 

  return (
    <section className=" max-w-[800px]">
        <h2 className="text-black font-semibold mt-15 text-[24px]">Personalized for you</h2>
        <p className=" text-[#A5A5A5] text-[14px] font-normal">You may like these masterpieces</p>
        <div className="flex justify-between ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                {[1, 2].map((_, i) => (
                <div
                    key={i}
                    className="rounded-[24px] py-[20px] px-[20px] flex flex-col items-center relative overflow-visible"
                    style={{ backgroundColor: 'rgba(132, 60, 50, 0.3)' }}
                >
                    <Image
                    src="/app_home/deneme.png"
                    alt="Decorative"
                    width={160}
                    height={213}
                    priority
                    />
                    <div className="flex mt-4 font-normal items-center text-[16px] text-black">
                    <Rocket size={20} className="mr-1" />
                    Trending in Psychology
                    </div>
                    <p className="line-clamp-3 text-[16px] text-[#666666] font-normal text-center mt-2">
                    The Psychology of Money by Morgan Housel explores the complex relationship between people and there he was least sjhsjkshdjflkjalfjla
                    </p>
                    <div className="flex items-center justify-start mt-5 w-full gap-3">
                           <div className="flex  font-normal items-center text-[12px] text-black border border-black  px-2 py-1 rounded-[102px]">
                            <Clock size={15} className="mr-1" />
                            13 min
                            </div>
                            <div className="flex  font-normal items-center text-[12px] text-black">
                            <Star size={15} className="mr-1" />
                              4.9
                            </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
 </section>

  );
}
