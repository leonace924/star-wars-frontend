import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useGlobal = create(
  devtools((set) => ({
    totalPages: 1,
    setTotalPages: (totalPages) => set({ totalPages }),
    currentPage: 1,
    setCurrentPage: (currentPage) => set({ currentPage }),
    isNext: true,
    setIsNext: (isNext) => set({ isNext }),
    starPeoples: [],
    setStarPeoples: (starPeoples) => set({ starPeoples }),
    isSearch: true,
    setIsSearch: (isSearch) => set({ isSearch }),
  })),
);
