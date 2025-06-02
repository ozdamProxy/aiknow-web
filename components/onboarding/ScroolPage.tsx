"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
import ContinueButton from "./ContinueButton";
import CircularProgress from "./CircularProgress";
import InfiniteScrollGallery from "./InfiniteScrollGallery";

interface OptionProps {
  title: string;
  options: string[];
  step:string;
  type:String
}

const ChooseTitle:React.FC<OptionProps> = ({title,options,step,type}) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);  
  const router = useRouter();  

  const handleRedirect = () => {
    const randomUserId = crypto.randomUUID();
    const revenueCatUrl = `https://pay.rev.cat/allrsvoofikggkdm/${randomUserId}`;
    console.log(`uuid ${randomUserId}`);

    setTimeout(() => {
      window.location.href = revenueCatUrl;
    }, 2000); 
  };

  return (
  
      <div className="w-full mt-[70px] flex flex-col items-center justify-items-center  ">
     
             <CircularProgress onComplete={handleRedirect}  />     
             <h3 className="sm:text-[20px] mt-[30px] text-[18px] mx-[20px] text-black font-regular  sm:font-medium text-center">We’ re customizing the best experience tailored for you...</h3>
            
             <p className="text-[18px] text-black font-regular mt-[20px]">Hold on a sec...</p>
             <div className="flex items-center justify-center gap-3 mt-[40px] ">
                <InfiniteScrollGallery/>
             </div>

        
         </div>
    );

}
export default ChooseTitle;