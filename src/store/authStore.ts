import create from 'zustand'

export type TokenSetter = (token: string) => void;
export interface AuthState {
  userToken: string | null;
  setToken:TokenSetter;
}

const useAuthStore = create<AuthState>(set => ({
    userToken: null,
    setToken:(token:string) => {
        set({userToken:token})
    }
}));

export default useAuthStore;
