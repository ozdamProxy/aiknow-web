"use client";
import { log } from "console";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Purchases, Offerings } from '@revenuecat/purchases-js';
import { useEffect , useState} from "react";
import Link from "next/link";

export default function Home() {

  const pathname = usePathname();
  const isOnboarding = pathname.startsWith("/onboarding");

 
  return (
  <div className="flex flex-col max-w-[1728px]  items-center justify-center min-h-screen w-full mx-auto overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
     
     <header  className={`pt-[30px] flex items-center justify-center ${
    isOnboarding ? "bg-[#898989]" : ""
  }`}>
      <Image
            src="/logo.svg"
            alt="Next.js logo"
            width={124}
            height={32}
            priority
          />
     </header>

     <main className="flex flex-col gap-8 items-center w-full lg:mt-[100px] md:mt-[30px]">


      <section className="flex flex-col md:flex-row  gap-4 w-full min-h-[auto] h-auto px-[20px]">

          <div className="flex flex-col flex-1  p-4 w-full md:w-1/2  gap-[19px] justify-center  my-[20dp] ">
            <h1 className="text-black text-3xl sm:text-4xl md:text-6xl lg:text-[63px] font-bold  ">The Fastest Way to Gain Life-Changing Knowledge</h1>
            <p className="text-black text-xl font-light ">"With I Know, absorb the best books in minutes and take action today."</p>
            <Link href={"/onboarding/1"} className="px-8 py-4 text-white  text-center bg-[#F7C663] text-[20px] font-light max-w-[215px] inline-block rounded-lg  shadow-md hover:bg-yellow-500 transition">
              Get Started
            </Link>
          </div>

          <div className="relative w-full md:w-1/2">
            <div className="
              w-full 
              h-auto 
              aspect-[4/3] /* Resminizin orijinal en-boy oranı */
              max-h-[500px] /* Maksimum yükseklik */
              sm:max-h-[600px] 
              md:max-h-[700px]
              lg:max-h-[800px]
            ">
              <Image
                src="/home/sec_1.png"
                alt="Content illustration"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
              />
            </div>
          </div>
      </section>



      <section className="flex flex-col min-h-screen w-[calc(100%-40px)] gap-4 bg-[#292929] rounded-[40px] px-[20px] py-[40px] lg:px-[170px] md:px-[20px] ">
        {/* Başlık - Artık sabit bir padding ile */}
        <div className="w-full lg:w-1/2 mx-auto text-center pt-[50px] px-4">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-6xl lg:text-[63px]">
            Read or Listen to the World's Best Books in Minutes
          </h2>
        </div>

        {/* Kaydırılabilir kategori listesi - overflow düzeltmesi */}
        <div className="w-full px-4 py-6">
  <div className="flex flex-row gap-4 overflow-x-auto pb-4 whitespace-nowrap justify-center">
    {[
      { icon: "/home/rocket.svg", text: "Entrepreneurship" },
      { icon: "/home/communication.svg", text: "Communication Skills" },
      { icon: "/home/marketing.svg", text: "Marketing & Sales" },
      { icon: "/home/sex.svg", text: "Sex & Relationships" },
      { icon: "/home/mindull.svg", text: "Mindfulness & Happiness" },

    ].map((item, i) => (
      <div key={i} className="flex-shrink-0 flex items-center px-4 py-2 text-black bg-[#FFFAF0] rounded-2xl">
        <span className="mr-2">
          <img src={item.icon} alt="Icon" className="w-5 h-5" />
        </span>
        {item.text}
      </div>
    ))}
  </div>
</div>

        {/* Ana içerik - flex-grow ile esnek alan */}
        <div className="flex-grow w-full">
          <div className="bg-[#4E4E4E] border border-[#DADADA] rounded-[30px] p-6 flex flex-col sm:flex-row gap-8">
            {/* Resim kısmı */}
            <div className="sm:w-1/2 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3]">
                <Image
                  src="/home/book.png"
                  alt="Book"
                  fill
                  className="object-contain rounded-[20px]"
                  priority
                />
              </div>
            </div>
            
            {/* Metin kısmı */}
            <div className="sm:w-1/2 w-full flex flex-col gap-4 justify-center">
          
              <p className="text-white font-bold text-[16px]">Key Point 1</p>
              <p className="text-white text-[24px] font-bold">No one will know what you want unless you say it.</p>
              <p className="text-white text-[16px] font-light">
              The Psychology of Money by Morgan Housel explores the complex relationship between people and money, offering timeless lessons on wealth, greed, and happiness. Through engaging stories and insights, the book reveals how emotions, behaviors, and life choices shape financial success. Whether you’re a seasoned investor or just starting out, this book will transform how you think about money and decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-screen"> {/* h-screen ekran yüksekliği kadar */}
        {/* Arka plan resmi */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/home/sec-3.png"
            alt="Arka Plan"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Opaklık efekti (isteğe bağlı) */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* İçerik - resmin üzerine gelecek yazılar */}
        <div className="relative z-10 flex flex-col items-center pt-[60px] h-full text-center text-white px-4">
          <h3 className="text-4xl md:text-6xl font-bold mb-6 w-1/2">Listen or Read Bestselling Summaries Anytime</h3>
          <p className="text-xl  max-w-2xl mb-8 font-light">Get key insights from top books in just 15 minutes—read or listen on the go.</p>
          <Link href={"/onboarding/1"} className="bg-white hover:bg-blue-600 text-black px-8 py-3 rounded-lg text-lg">
            Get Started
          </Link>
        </div>
      </section>


      <section className="relative w-full h-screen flex flex-col items-center lg:px-[170px] md:px-[20px] " > {/* h-screen ekran yüksekliği kadar */}
          <h3 className="text-4xl md:text-6xl font-bold mb-6 text-black">Grow Every Day</h3>
          <p className="text-xl  max-w-2xl mb-8 font-light text-black text-center">Big goals can feel overwhelming, but growth doesn’t have to be hard. Make self-improvement effortless and fun with daily challenges!</p>

      {/* <scrolll gelcek */}

        <div className="w-full ">
        <div className="relative w-full" style={{ height: 'auto' }}>
          <Image
            src="/home/container_.png"
            alt="Container image"
            width={1920} // Resmin orijinal genişliği
            height={1080} // Resmin orijinal yüksekliği
            className="w-full h-auto"
            priority
          />
        </div>
        </div>


      </section>

    
      <section className="relative w-full min-h-screen flex flex-col items-center"> {/* h-screen yerine min-h-screen */}
        <div className="w-full max-w-[1728px] px-[20px] lg:px-[170px] md:px-[20px] flex flex-col  items-center">
          <h3 className="text-4xl md:text-6xl font-bold mb-6 text-black text-center">Smart Learning, Happy Users</h3>
          <p className="text-xl max-w-2xl mb-8 font-light text-black text-center">Get key insights from top books in just 15 minutes—read or listen on the go.</p>

          {/* Sabit boyutlu kartlar için container */}
          <div className="w-full overflow-x-auto pb-4"> {/* overflow ekledik */}
            <div className="flex gap-[20px] justify-center mx-auto min-w-max"> {/* min-w-max ekledik */}
              {[1, 2, 3].map((item) => (
                <div 
                  key={item}
                  className="bg-[#FAF8F5] border border-[#DADADA] rounded-[30px] p-[20px] flex flex-col gap-4 w-[300px] flex-shrink-0" /* Sabit genişlik */
                >
                  {/* 5 stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Image 
                        key={i}
                        src="/home/star.svg"
                        alt="star"
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-[20px] font-[400] text-black">
                  I Know keeps me on track with daily insights that fit into my busy life. I love the reminders—without them, I'd never keep up! Thank you!
                  </p>
                  {/* Image with name */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/home/${item === 1 ? 'emma' : item === 2 ? 'nathan' : 'mike'}.png`}
                      alt="Profile"
                      width={40}
                      height={44}
                    />
                    <span className="text-[16px] text-black">
                      {item === 1 ? 'Emma London' : item === 2 ? 'Nathan.K' : 'MikeD_87'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tam genişlikli sarı alan */}
        <div className="w-screen bg-[#F7C663] mt-[30px]">
  <div className="container mx-auto flex flex-col sm:flex-row gap-8 px-4 sm:px-6 py-12 max-w-[1728px]">
    {/* Yazılar kısmı - Mobilde ortalanmış, büyük ekranda sola padding */}
    <div className="w-full sm:w-1/2 flex flex-col gap-6 justify-around text-center sm:text-left lg:pl-[40px]">
      <h2 className="text-2xl md:text-4xl font-bold text-black">
        No Extra Time Needed.<br className="hidden sm:block"/>We Know You're Busy.
      </h2>
      <p className="text-[20px] font-normal text-black md:text-xl">
      I Know fits effortlessly into your daily routine. Listen while commuting, read while waiting, or learn while doing everyday tasks. Smarter learning, made simple.
      </p>
      <div className="flex justify-center sm:justify-start">
        <button className="bg-white hover:bg-blue-600 text-black px-8 py-3 rounded-lg text-[20px] w-[175px]">
          Get Started
        </button>
      </div>
    </div>
    
    {/* Resim kısmı */}
    <div className="w-full sm:w-1/2 flex justify-center items-center">
      <div className="relative w-full min-h-[300px] sm:min-h-[400px]">
        <Image
          src="/home/run_girl.png"
          alt="Running girl illustration"
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  </div>
</div>
      </section>
    
    
    </main>

    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 ">

      <div className="container w-full mx-auto mt-12 pt-6 border-t border-gray-200"/>
      
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo - En solda */}
          <div className="w-full md:w-auto">
            <Image
              src="/logo.svg"
              alt="Site Logo"
              width={124}
              height={32}
              priority
            />
          </div>

          {/* Sağ taraftaki içerikler */}
          <div className="w-full flex flex-col md:flex-row justify-end gap-8 md:gap-16">
            {/* Company, About Us, Blog */}
            {/* <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg text-[#28231B]">Company</h4>
              <ul className="flex flex-col gap-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Blog</a></li>
              </ul>
            </div> */}

            {/* Support, FAQ, Contact Us */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg text-[#28231B]">Support</h4>
              <ul className="flex flex-col gap-2">
                <li><Link href="/paymentinfo" className="text-gray-600 hover:text-gray-900 transition">Payment Info</Link></li>
                <li><Link href="/paymentinfo" className="text-gray-600 hover:text-gray-900 transition">Contact Us</Link></li>
                {/* <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Help Center</a></li> */}
                <li><Link href="/termsofcondition" className="text-gray-600 hover:text-gray-900 transition">Terms of Service</Link></li>
                <li><Link href="/privacypolicy" className="text-gray-600 hover:text-gray-900 transition">Privacy Policy</Link></li>
              </ul>
            </div>

          
          </div>
        </div>
  
    </footer>     
  </div>
  );
}
