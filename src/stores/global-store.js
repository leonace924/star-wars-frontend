import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useGlobal = create(
  devtools((set) => ({
    selectedPeople: {},
    setSelectPeople: (selectedPeople) => set({ selectedPeople }),
  })),
);
