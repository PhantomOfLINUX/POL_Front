import create from 'zustand'

export type TokenSetter = (token: string|null) => void;
export interface AuthState {
  userToken: string | null;
  setToken:TokenSetter;
}

const useAuthStore = create<AuthState>(set => ({
    userToken: null,
    setToken:(token) => {
        set({userToken:token})
    }
}));

export default useAuthStore;
