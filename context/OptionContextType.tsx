import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface OptionContextType {
  selectedSummaries: Record<string, string>;
  setSummaries: (step: string, option: string) => void;
  selectedHabit: string;  // 🟢 Artık sadece string
  setHabit: (option: string) => void; // 🟢 step gereksiz, sadece option alıyor
  selectedBecome: string; // 🟢 Aynı şekilde string
  setBecome: (option: string) => void; // 🟢 step olmadan güncelleniyor

}

const OptionContext = createContext<OptionContextType | undefined>(undefined);

export const OptionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSummaries, setSelectedSummaries] = useState<Record<string, string>>({});
  const [selectedHabit, setSelectedHabit] = useState<string>("");  
  const [selectedBecome, setSelectedBecome] = useState<string>("");

  const setSummaries = (step: string, option: string) => {
    setSelectedSummaries((prev) => ({ ...prev, [step]: option }));
  };

  const setHabit = (option: string) => {
    setSelectedHabit(option);  // 🟢 Artık doğrudan string değerini güncelliyoruz
  };
  
  const setBecome = (option: string) => {
    setSelectedBecome(option);  // 🟢 Aynı şekilde string olarak güncelliyoruz
  };
 
  return (
    <OptionContext.Provider value={{ selectedSummaries, setSummaries , selectedHabit, setHabit, selectedBecome, setBecome  }}>
      {children}
    </OptionContext.Provider>
  );
};

export const useOptionContext = () => {
  const context = useContext(OptionContext);
  if (!context) {
    throw new Error("useOptionContext must be used within an OptionProvider");
  }
  return context;
};
