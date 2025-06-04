"use client"
import { main } from "framer-motion/client"
import React, { useEffect } from "react"
import { FlameIcon , ChevronDown, Circle} from "lucide-react"
import { useState } from "react";
import StreakCard from "@/components/home/StreaskCard";
import FreeDailyCard from "@/components/home/FreeDailyCard";
import PersonalizedCard from "@/components/home/PersonalizedCard";
import SliderCard from "@/components/home/SliderCard";
import { auth } from '@/lib/firebase';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getIdToken } from 'firebase/auth';
import { signInWithCustomToken } from "firebase/auth";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function HomeMenu() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [dailyPick,setDailyPick] = useState(null)
    const [userStreak,setUserstreak] = useState(0)
    const [userWeeklyKeyPoints,setUserWeeklyKeyPoints] = useState(0)
    const [userWeeklyMinutes,setUserWeeklyMinutes] = useState(0)

    return(
    
        <main className="max-w-[80rem] min-h-screen flex w-full mx-auto pt-[4rem] px-[10px] md:px-[3rem]  flex-col pb-6  ">

            <StreakCard/>
            <FreeDailyCard dailyPick={dailyPick}/>
            <PersonalizedCard/>
            <SliderCard/>

        </main>
    )
   
}