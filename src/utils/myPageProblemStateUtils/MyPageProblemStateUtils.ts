const url = process.env.NEXT_PUBLIC_BASE_API;

import { CompletedStateSetter } from "@/store/myPageCompleteStore";
import { InProgressStateSetter } from "@/store/myPageInProgressStore";
import { HeatmapInfoSetter } from "@/store/myPageProblemHeatmap";

interface stageCodeDTOS {
    stageCode: string;
    accessUrl: string;
}

export const GetMyPageProblemStateCompleted = async (e: React.MouseEvent<HTMLElement>, accessToken: string, setCompletedCode: CompletedStateSetter) => {
    e.preventDefault();
    try {
        const getMyProblemState = await fetch(`${url}/api/players/me/stages?status=COMPLETED`, {
            //credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(response => response.json())
            .then(response => setCompletedCode(response.stageCodeDTOS.length))
    }
    catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}

export const GetMyPageProblemStateInProgress = async (e: React.MouseEvent<HTMLElement>, accessToken: string, setInProgressCode: InProgressStateSetter) => {
    e.preventDefault();
    try {
        const getMyProblemState = await fetch(`${url}/api/players/me/stages?status=IN_PROGRESS`, {
            //credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(response => response.json())
            //.then(response => response);
            .then((response: { stageCodeDTOS: { stageCode: string; accessUrl: string; }[] }) => {
                const stageCodeDTOS = response.stageCodeDTOS;
                const stageCodes = stageCodeDTOS.map((stage: { stageCode: string; accessUrl: string; }) => stage.stageCode);
                setInProgressCode(stageCodes);
            })
    }
    catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}

export const GetMyPageProblemHeatmap = async (e: React.MouseEvent<HTMLElement>, accessToken: string, setHeatmapInfoArray: HeatmapInfoSetter) => {
    e.preventDefault();
    try {
        const getMyProblemState = await fetch(`${url}/api/players/me/heat-map`, {
            //credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(response => response.json())
            //.then(response => console.log(response))
            .then((response: { date: string; count: number; }[]) => {
                // 각 객체의 date와 count 속성을 추출하여 새로운 배열에 저장
                const dateCounts = response.map(item => ({ date: item.date, count: item.count }));
                // 추출된 배열을 상태로 설정
                setHeatmapInfoArray(dateCounts);
            })
    }
    catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}

// export const GetMyPageProblemStateNotCompleted = async (e: React.MouseEvent<HTMLElement>, accessToken: string) => {
//     e.preventDefault();
//     try {
//         const getMyProblemState = await fetch(`${url}/api/players/me/stages?status=NOT_COMPLETED`, {
//             //credentials: 'include',
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${accessToken}`,
//             }
//         }).then(response => response.json())
//             .then(response => console.log("NOTCOMPLETED = ", response));
//     }
//     catch (error) {
//         console.error('무슨에러일까요?:', error);
//         return false;
//     }
// }
