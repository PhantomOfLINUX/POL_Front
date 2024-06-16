// store/useModalStore.ts
import create from 'zustand';
import { SetStateAction } from "react";

interface ModalState {
    ModalCheck: boolean;
    setModalCheck: (value: SetStateAction<boolean>) => void; // 수정된 부분
}

const useModalStore = create<ModalState>((set) => ({
    ModalCheck: false,
    setModalCheck: (value: SetStateAction<boolean>) => set((state) => ({
        ModalCheck: typeof value === 'function' ? (value as (prevState: boolean) => boolean)(state.ModalCheck) : value
    })),
}));

export default useModalStore;