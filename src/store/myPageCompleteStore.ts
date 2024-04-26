import { create } from 'zustand'
import { persist } from 'zustand/middleware';
export type CompletedStateSetter = (completedCode: number | null) => void;


export interface CompletedState {
    completed: number | null;
    setCompletedCode: CompletedStateSetter;
}

const useMyPageCompletedStore = create(
    persist<CompletedState>(
        (set, get) => ({
            completed: null,
            setCompletedCode: (completedCode) =>
                set({ completed: completedCode }),

        }),
        {
            name: 'problem-complete-code'
        }
    )
);



export default useMyPageCompletedStore;
