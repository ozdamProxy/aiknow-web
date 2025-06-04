import { useState } from "react";
import Image from "next/image";
import { FlameIcon, ChevronDown } from "lucide-react";

interface DailyPick {
    _id: string;
    title: string;
    author: string;
    language: string;
    discoverable: boolean;
    category: string[];
    slug: string;
    cover_image_url: string;
    about_the_book: string;
    about_the_author: string;
    reading_duration: number;
    numberOfChapters: number;
    ratings: number;
    rating_count: number;
    metadata_id: string;
    created_at: string;
}

interface FreeDailyCardProps {
    dailyPick: DailyPick | null;
}

export default function FreeDailyCard( { dailyPick }: FreeDailyCardProps ) {

  return (
  <section 
  className="bg-[#FFBA2F] rounded-[24px] mt-8 md:mt-15 py-[20px] px-[35px] max-w-[800px] relative overflow-visible"
   style={{
    background: 'linear-gradient(180deg, #F7C663 -0.02%, #FFBA2F 97.03%)',
  }}>
  <div className="flex items-start justify-between relative z-10">
    <div>
      <p className="text-black font-bold text-[20px] leading-tight mb-2">
        Free Daily <br /> Summary
      </p>
      <p className="text-white font-thin text-[14px]">Get It Now</p>
    </div>

    {/* Görsel */}
    {
      dailyPick && <div className="absolute -top-8 -bottom-2 right-0 rotate-[10deg] shadow-md">
      <img
        src={dailyPick?.cover_image_url}
        alt="Decorative"
        width={122}
        height={80}
      />
    </div>
    }
   
  </div>
</section>

  );
}
