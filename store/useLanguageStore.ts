import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Language } from "@/types/learning";

type LanguageStore = {
  selectedLanguage: Language | null;
  setSelectedLanguage: (language: Language) => void;
  clearSelectedLanguage: () => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      setSelectedLanguage: (language) => set({ selectedLanguage: language }),
      clearSelectedLanguage: () => set({ selectedLanguage: null }),
    }),
    {
      name: "language-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
