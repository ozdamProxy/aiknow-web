"use client";

export default function ContinueButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-[30px] w-[310px] py-[15px] sm:w-[350px] lg:w-[410px] bg-[#F7C663] text-black font-medium text-[16px] sm:text-[20px] rounded-[15px] flex items-center justify-center text-base font-bold transition hover:bg-[#eab24d] active:scale-95"
    >
      Continue
    </button>
  );
}
