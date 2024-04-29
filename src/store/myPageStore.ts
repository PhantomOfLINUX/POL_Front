import { create } from 'zustand'

export type SelectorSetter = (page: number | null) => void;

export interface MyPageState {
    pageSelector: number | null;
    setSelector: SelectorSetter;
}

const useMyPageStore = create<MyPageState>(set => ({
<<<<<<< HEAD
    pageSelector: 1,
=======
    pageSelector: 2,
>>>>>>> d5b907939b025104df84e8fa8a75886851253267
    setSelector: (page) => {
        set({ pageSelector: page })
    }
}));

export default useMyPageStore;
