import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export type InProgressStateSetter = (inProgressCode: number | null, inProgressList: string[] | null) => void;

export interface InProgressState {
    inProgress: number | null,
    inProgressList: string[] | null,
    setInProgressCode: InProgressStateSetter;
}

const useMyPageInProgressStore = create(
    persist<InProgressState>(
        (set, get) => ({
            inProgress: null,
            inProgressList: null,
            setInProgressCode: (inProgressCode, inProgressList) =>
                set({ inProgress: inProgressCode, inProgressList: inProgressList }),

        }),
        {
            name: 'problem-inprogress-code'
        }
    )
);



export default useMyPageInProgressStore;
