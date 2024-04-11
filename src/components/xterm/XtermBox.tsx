"use client"

import React,{Suspense,useState} from "react";

import useGetXtermUrl from "@/hooks/useGetXtermUrl";

import type { Resource } from "@/lib/wrappingPromise";

import XtermModal from "./XtermModal";
import XtermUrlProvider from "./XtermUrlProvider";

interface CheckProblem {
    uid: string;
    stageId: number;
    stageCode: string;
    exists: boolean;
}

interface XtermBoxType {
    accessToken:string|undefined,
    refreshToken:string|undefined
    problemSolvedCheck:Resource<CheckProblem> | undefined
}

const XtermBox:React.FC<XtermBoxType> = ({accessToken,refreshToken,problemSolvedCheck}) => {
    const [ModalCheck,setModalCheck] = useState<boolean>(true);
    const [XtermUrlCheck,setXtermUrlCheck] = useState<boolean>(true);//true-get false-post
    const xtemrConnectUrl = useGetXtermUrl(accessToken,refreshToken,problemSolvedCheck?.read().exists,ModalCheck,XtermUrlCheck)
    return (
        <Suspense fallback={<div>Loding...</div>}>
            {problemSolvedCheck?.read().exists&&ModalCheck?
                <XtermModal setXtermUrlCheck={setXtermUrlCheck} setModalState={setModalCheck}/>
                :
                <XtermUrlProvider xtemrConnectUrl={xtemrConnectUrl}/>
            }
        </Suspense>
    )
}


export default XtermBox


/*
Xterm에 먼저 주면 안된다.. 
problemSolvedCheck가 
false면 get으로 주기
ture면 modal을 이용해서 주기
*/