"use client";

import Image from "next/image"; 
import { Home, Compass, Library, GiftIcon , Menu , X} from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function HeaderHome() {

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const [open, setOpen] = useState(false)
  
 useEffect(() => {
      console.log(`open ${open}`)
      
    }, [open]); 
   

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4 z-50 text-black"
      >
        <Menu size={28} />
      </button>
       
     <aside className={`
        md:flex md:flex-col w-64 h-screen bg-[#DCDBDB] text-black p-4 items-center 
        transition-transform duration-300 transform
        ${open ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
      <div className="flex items-center justify-between h-16 w-full" >
          <Image
                    src="/logo.svg"
                    alt="Next.js logo"
                    width={124}
                    height={32}
                    priority
               />
          <X size={20} className="md:hidden"  onClick={() => setOpen(false)}/>
      </div>
      <div className="flex flex-col space-y-4 mt-[50px]">
        <nav className="flex flex-col space-y-4">
        <Link
          href="/homemenu"
          className={`flex items-center gap-3 font-medium ${
            isActive('/homemenu') ? 'text-[#F7C663]' : 'text-[#666666]'
          }`}
        >
          <Home size={20} />
          For You
        </Link>

        <Link
          href="/homemenu"
          className={`flex items-center gap-3 font-medium ${
            isActive('/explore') ? 'text-[#F7C663]' : 'text-[#666666]'
          }`}
        >
          <Compass size={20} />
          Explore
        </Link>
       
        <Link
          href="/library"
          className={`flex items-center gap-3 font-medium ${
            isActive('/library') ? 'text-[#F7C663]' : 'text-[#666666]'
          }`}
        >
          <Home size={20} />
          My Library
        </Link>

         <Link href="/library" className="flex items-center gap-3 font-medium text-[#666666]">
          <GiftIcon size={20} /> Today's Free Book
        </Link>
      </nav>
      </div>
    </aside>
    </>
    
  );
}
