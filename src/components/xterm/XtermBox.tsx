"use client"

import React, {Suspense, useState, useCallback} from "react";

import useGetXtermUrl from "@/hooks/useGetXtermUrl";

import type {Resource} from "@/lib/wrappingPromise";

import XtermModal from "./XtermModal";
import XtermUrlProvider from "./XtermUrlProvider";

import Spinner from "@/components/loading/Spinner";

interface CheckProblem {
    uid: string;
    stageId: number;
    stageCode: string;
    exists: boolean;
}

interface XtermBoxType {
    accessToken: string | undefined,
    refreshToken: string | undefined
    problemSolvedCheck: Resource<CheckProblem> | undefined
}

const XtermBox: React.FC<XtermBoxType> = ({accessToken, refreshToken, problemSolvedCheck}) => {
    const [ModalCheck, setModalCheck] = useState<boolean>(true);
    const [XtermUrlCheck, setXtermUrlCheck] = useState<boolean>(true);//3개로 true-get false-post
    const xtermConnectUrl = useGetXtermUrl(accessToken, refreshToken, problemSolvedCheck?.read().exists, ModalCheck, XtermUrlCheck)
    return (
        <Suspense fallback={<Spinner/>}>
            {problemSolvedCheck?.read().exists && ModalCheck ?
                <>
                    <div className="w-screen h-96"></div>
                    <XtermModal setXtermUrlCheck={setXtermUrlCheck} setModalState={setModalCheck}/>
                </>
                :
                <XtermUrlProvider accessToken={accessToken} refreshToken={refreshToken} xtermConnectUrl={xtermConnectUrl}/>
            }
        </Suspense>
    )
}


export default XtermBox