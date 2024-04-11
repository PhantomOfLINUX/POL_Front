const url = process.env.NEXT_PUBLIC_BASE_API;

import { ProfileSetter } from "@/store/myPageProfileStore";

export const GetMyPageProfileInfo = async (e: React.MouseEvent<HTMLElement>, accessToken: string, setProfileInfo: ProfileSetter) => {
    e.preventDefault();
    //console.log(accessToken);
    try {
        const getMyProfile = await fetch(`${url}/api/plyers/me/profile`, {
            //credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(response => response.json())
            .then(response => setProfileInfo(response.email, response.name, response.uid, response.level))
    }
    catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}