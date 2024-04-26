import { create } from 'zustand'

export type SelectorSetter = (page: number | null) => void;

export interface MyPageState {
    pageSelector: number | null;
    setSelector: SelectorSetter;
}

const useMyPageStore = create<MyPageState>(set => ({
    pageSelector: 2,
    setSelector: (page) => {
        set({ pageSelector: page })
    }
}));

export default useMyPageStore;
