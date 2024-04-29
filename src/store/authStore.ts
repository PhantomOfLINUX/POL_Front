import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export type TokenSetter = (token: string | null) => void;
export interface AuthState {
  userToken: string | null;
  setToken: TokenSetter;
}

// const useAuthStore = create<AuthState>(set => ({
//   userToken: null,
//   setToken: (token) => {
//     set({ userToken: token })
//   }
// }));

const useAuthStore = create(
  persist<AuthState>(
    set => ({
      userToken: null,
      setToken: (token) => {
        set({ userToken: token })
      }
    }),
    {
      name: 'token'
    }
  )
);


export default useAuthStore;
