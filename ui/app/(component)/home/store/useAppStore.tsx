// store/useAppStore.ts
import { create } from 'zustand';

type Store = {
  drawerOpen: boolean;
  setDrawerOpen: (val: boolean) => void;
};

export const useAppStore = create<Store>((set) => ({
  drawerOpen: false,
  setDrawerOpen: (val) => set({ drawerOpen: val }),
}));
