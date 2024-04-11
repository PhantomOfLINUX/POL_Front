"use client"

import React,{Suspense,useState} from "react";

import useGetXtermUrl from "@/hooks/useGetXtermUrl";

import type { Resource } from "@/lib/wrappingPromise";

import XtermModal from "./XtermModal";
import XtermUrlProvider from "./XtermUrlProvider";
import Loding from "@/components/loading/Loading";

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
        <Suspense fallback={<Loding/>}>
            {problemSolvedCheck?.read().exists&&ModalCheck?
                <>
                    <div className="w-screen h-96"></div>
                    <XtermModal setXtermUrlCheck={setXtermUrlCheck} setModalState={setModalCheck}/>
                </>
                :
                <XtermUrlProvider xtemrConnectUrl={xtemrConnectUrl}/>
            }
        </Suspense>
    )
}


export default XtermBox


