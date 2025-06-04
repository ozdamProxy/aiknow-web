import { useState, useRef } from "react";
import Image from "next/image";
import { FlameIcon, ChevronDown, Rocket, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function SliderCard() {
 
        const scrollRef = useRef<HTMLDivElement>(null)

        const scroll = (direction: 'left' | 'right') => {
            if (scrollRef.current) {
            const amount = 200 
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth'
            })
            }
        }

  return (
    <section className=" max-w-[800px]">
        <h2 className="text-black font-semibold mt-15 text-[24px]">Latest summaries</h2>
        <p className="text-[14px] font-normal text-[#A5A5A5]">Check out the latest collections!</p>
        <div className="flex items-center  mt-6 ">
            {/* Chevron Left - only visible on large screens */}
            <button className="hidden lg:block"
                onClick={() => {scroll('left') ; console.log("tiklandi")}}>
                <ChevronLeft 
                className="cursor-pointer"
                size={40} color="#666666"/>
            </button>

            {/* Scrollable Slider */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
            >
                {[...Array(15)].map((_, index) => (
                <div
                    key={index}
                    className="w-[140px] h-[217px] flex-shrink-0"
                >
                    <Image
                    src="/app_home/deneme.png"
                    alt="Decorative"
                    width={140}
                    height={187}
                    priority
                    />
                    <div className="flex justify-between mt-1 items-center">
                    <p className="text-[12px] text-[#595959]">Oprah Winfrey</p>
                    <div className="flex items-center text-[12px] text-black">
                        <Star size={15} className="mr-1" />
                        4.9
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Chevron Right - only visible on large screens */}
            <button className="hidden lg:block"
                onClick={() => scroll('right')}>
                <ChevronRight size={40} color="#666666" className="cursor-pointer"/>
            </button>
        </div>
    </section>

  );
}
