import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Bears {
  id: number;
  name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bears[];

  totalBears: () => number;

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  addBear: () => void;
  clearBears: () => void;
}

export const useBearsStore = create<BearState>()(
  persist(
    (set, get) => ({
      blackBears: 10,
      polarBears: 5,
      pandaBears: 1,

      bears: [],

      totalBears: () => {
        return (
          get().blackBears +
          get().polarBears +
          get().pandaBears +
          get().bears.length
        );
      },

      increaseBlackBears: (by) =>
        set((state) => ({ blackBears: state.blackBears + by })),

      increasePolarBears: (by) =>
        set((state) => ({ polarBears: state.polarBears + by })),

      increasePandaBears: (by) =>
        set((state) => ({ pandaBears: state.pandaBears + by })),

      addBear: () =>
        set((state) => ({
          bears: [
            ...state.bears,
            {
              id: state.bears.length + 1,
              name: `Oso # ${state.bears.length + 1}`,
            },
          ],
        })),

      clearBears: () => set({ bears: [] }),
    }),
    { name: "bears-store" }
  )
);
