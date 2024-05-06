import {BasicResponseDto} from "@/types/basicResponseDto";

const url = process.env.NEXT_PUBLIC_BASE_API;
export const isAdmin = async (accessToken: string) => {
    try {
        const response = await fetch(`${url}/api/players/me/admin`, {
            credentials: "include",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            return false;
        }

        const body: BasicResponseDto = await response.json();

        return body.response === "true";
    } catch (error) {
        console.log(error);
    }
}
