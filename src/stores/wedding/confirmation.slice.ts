import { StateCreator } from "zustand";

export interface ConfirmationSlice {
  isConfirmed: boolean;

  setIsConfirmed: (value: boolean) => void;
}

export const createConfirmSlice: StateCreator<ConfirmationSlice> = (set) => ({
  isConfirmed: false,

  setIsConfirmed: (value) => set({ isConfirmed: value }),
});
