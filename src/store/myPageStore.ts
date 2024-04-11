import { create } from 'zustand'

export type SelectorSetter = (page: number | null) => void;

export interface PageState {
    pageSelector: number | null;
    setSelector: SelectorSetter;
}

const myPageStore = create<PageState>(set => ({
    pageSelector: 1,
    setSelector: (page) => {
        set({ pageSelector: page })
    }
}));

export default myPageStore;
