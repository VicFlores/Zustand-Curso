import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { firebaseStorage } from "../storages/firebase.store";
import { useWeddingBoundStore } from "../wedding";

interface PersonState {
  firstName: string;
  lastName: string;

  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
}

const storeApi: StateCreator<PersonState, [["zustand/devtools", never]]> = (
  set
) => ({
  firstName: "",
  lastName: "",

  setFirstName: (name) => set({ firstName: name }, false, "setFirstName"),
  setLastName: (lastName) => set({ lastName }, false, "setLastName"),
});

export const usePersonStore = create<PersonState>()(
  devtools(
    persist(storeApi, {
      name: "person-store",
      // storage: customSessionStorage,
      storage: firebaseStorage,
    })
  )
);

usePersonStore.subscribe((nextState /* prevState */) => {
  const { firstName, lastName } = nextState;

  useWeddingBoundStore.getState().setFirstName(firstName);
  useWeddingBoundStore.getState().setLastName(lastName);
});
