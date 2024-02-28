import create from 'zustand'


interface AuthState {
  userToken: string | null;
  setToken:(token:string)=>void;
}

const useAuthStore = create<AuthState>(set => ({
    userToken: null,
    setToken:(token:string) => {
        set({userToken:token})
    }
}));

export default useAuthStore;
