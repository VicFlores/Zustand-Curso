import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUri =
  "https://zustand-course-a8ae2-default-rtdb.firebaseio.com/zustand";

const firebaseApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseUri}/${name}.json`).then((res) =>
        res.json()
      );

      return JSON.stringify(data);
    } catch (error) {
      throw new Error("Error fetching data from Firebase");
    }
  },

  setItem: async function (name: string, value: string): Promise<void> {
    try {
      const data = await fetch(`${firebaseUri}/${name}.json`, {
        method: "PUT",
        body: value,
      }).then((res) => res.json());

      return data;
    } catch (error) {
      throw new Error("Error fetching data from Firebase");
    }
  },

  removeItem: function (name: string): void {
    console.log("removeItem", name);
  },
};

export const firebaseStorage = createJSONStorage(() => firebaseApi);
