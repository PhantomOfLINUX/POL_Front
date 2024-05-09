import {Question} from "@/types/questionType";
import {StageUploadRequest} from "@/types/stageType";

const url = process.env.NEXT_PUBLIC_BASE_API


export const uploadStageSet = async (stageUploadRequest: StageUploadRequest, accessToken: string) => {
    stageUploadRequest.difficultyLevel = "L2";
    stageUploadRequest.groupType = "BASIC_PROBLEMS";

    try {
        const response = await fetch(`${url}/api/stages`, {
            credentials: "include",
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stageUploadRequest),
        });

        const data = response.json();

        if (!response.ok) {
            alert("error")
            console.log(data)
            return;
        }
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}