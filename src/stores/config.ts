import { create } from "zustand";
import { UserAuth } from "@/models";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  auth: UserAuth
};

const initialState: State = {
  auth: {
    id: 0,
    name: '',
    username: '',
    email: '',
  }
};

type Actions = {
  setAuth: (auth: UserAuth) => void;
  reset: () => void;
};

const useConfigStore = create<State & Actions>()(persist(
  (set) => ({
    ...initialState,
    setAuth: (auth: UserAuth) => set((state) => ({ ...state, auth })),
    reset: () => set(initialState),
  }),
  { name: 'config-store', storage: createJSONStorage(() => sessionStorage) }
));

export default useConfigStore;