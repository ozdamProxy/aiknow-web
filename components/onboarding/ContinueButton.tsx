"use client";

export default function ContinueButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-[30px] w-[350px] h-[55px] bg-[#F7C663] text-white font-semibold text-lg rounded-[15px] flex items-center justify-center text-base font-bold transition hover:bg-[#eab24d] active:scale-95"
    >
      Continue
    </button>
  );
}
