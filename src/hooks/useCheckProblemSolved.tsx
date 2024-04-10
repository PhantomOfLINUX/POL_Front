import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useCheckAccess from "./useCheckAccess";
import { wrapPromise, Resource } from "@/lib/wrappingPromise";

interface CheckProblem {
    uid: string;
    stageId: number;
    stageCode: string;
    exists: boolean;
}

const url = process.env.NEXT_PUBLIC_BASE_API;

function useCheckProblemSolved(
    accessToken: string | undefined,
    refreshToken: string | undefined
): Resource<CheckProblem> | undefined {
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    const searchParams = useSearchParams();
    const [problemSolvedCheck, setProblemSolvedCheck] = useState<Resource<CheckProblem> | undefined>();

    useEffect(() => {
        const stageID = searchParams.get("stageId");
            const fetchData = async () => {
            const response = await fetch(`${url}/lab/terminal/existence/${stageID}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${validAccessToken}`,
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
                return response.json();
        };
        setProblemSolvedCheck(wrapPromise(fetchData()));
    }, [validAccessToken, searchParams]);

    return problemSolvedCheck;
}

export default useCheckProblemSolved;
