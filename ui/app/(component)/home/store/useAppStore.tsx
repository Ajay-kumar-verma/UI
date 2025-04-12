// store/useAppStore.ts
import { create } from "zustand";

type Store = {
  drawerOpen: boolean;
  setDrawerOpen: (val: boolean) => void;
  navIndex: number;
  setNavIndex: (val: number) => void;
};

export const useAppStore = create<Store>((set) => ({
  drawerOpen: false,
  setDrawerOpen: (drawerOpen) => set({ drawerOpen }),
  navIndex: 0,
  setNavIndex: (navIndex) => set({ navIndex }),
}));
