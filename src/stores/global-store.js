import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useGlobal = create(
  devtools((set) => ({
    selectedPeople: false,
    setSelectPeople: (selectedPeople) => set({ selectedPeople }),
  })),
);
