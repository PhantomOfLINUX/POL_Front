import { create } from 'zustand'
import { persist } from 'zustand/middleware';
export type ProfileSetter = (email: string | null, name: string | null, uid: string | null, level: number | null) => void;


export interface ProfileState {
    userEmail: string | null;
    userName: string | null;
    userId: string | null;
    userLevel: number | null;
    setProfileInfo: ProfileSetter;
}

const useMyPageProfileStore = create(
    persist<ProfileState>(
        (set, get) => ({
            userEmail: null,
            userName: null,
            userId: null,
            userLevel: null,
            setProfileInfo: (email, name, uid, level) =>
                set({ userEmail: email, userName: name, userId: uid, userLevel: level }),

        }),
        {
            name: 'mypage-profile-info'
        }
    )
);



export default useMyPageProfileStore;
