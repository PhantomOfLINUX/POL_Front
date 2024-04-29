import { create } from 'zustand'
import { persist } from 'zustand/middleware';
export type InProgressStateSetter = (inProgressArray: string[] | null) => void;


export interface InProgressState {
    inProgress: string[] | null;
    setInProgressCode: InProgressStateSetter;
}

const useMyPageInProgressStore = create(
    persist<InProgressState>(
        (set, get) => ({
            inProgress: [],
            setInProgressCode: (inProgressArray) =>
                set({ inProgress: inProgressArray }),

        }),
        {
            name: 'problem-inprogress-code'
        }
    )
);



export default useMyPageInProgressStore;
