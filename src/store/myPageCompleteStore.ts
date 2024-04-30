import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export type CompletedStateSetter = (completedCode: number | null, completedList: string[] | null) => void;

export interface CompletedState {
    completed: number | null;
    completedList: string[] | null;
    setCompletedCode: CompletedStateSetter;
}

const useMyPageCompletedStore = create(
    persist<CompletedState>(
        (set, get) => ({
            completed: null,
            completedList: null,
            setCompletedCode: (completedCode, completedList) =>
                set({ completed: completedCode, completedList: completedList }),

        }),
        {
            name: 'problem-complete-code'
        }
    )
);



export default useMyPageCompletedStore;
