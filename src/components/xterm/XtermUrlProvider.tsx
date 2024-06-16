// XtermUrlProvider.tsx
"use client"

import React from "react";
import { Resource } from "@/lib/wrappingPromise";
import useGetQuestionCount from "@/hooks/useGetQuestionCount";
import Xterm from "./Xterm";
import XtermQuestion from "./XtermQuestion/XtermQuestion";
import XtermQuestionModal from "@/components/xterm/XtermQuestion/XtermQuestionModal"// 모달 컴포넌트 임포트
import useModalStore from "@/store/useModalStore"; // zustand 스토어 임포트

interface xtermUrlType {
    url: string,
    query: string
}

interface XtermUrlProviderType {
    accessToken: string | undefined,
    refreshToken: string | undefined,
    xtermConnectUrl: Resource<xtermUrlType> | undefined
}

const XtermUrlProvider: React.FC<XtermUrlProviderType> = ({ xtermConnectUrl, accessToken, refreshToken }) => {
    const questionCount = useGetQuestionCount(accessToken, refreshToken);
    const { ModalCheck } = useModalStore(); // zustand 스토어의 상태 가져오기

    return (
        <div className="flex w-full h-full justify-evenly pt-20 z-10">
            <XtermQuestion questionCount={questionCount} accessToken={accessToken} refreshToken={refreshToken} />
            <Xterm url={xtermConnectUrl?.read()?.url} query={xtermConnectUrl?.read()?.query} />
            {ModalCheck && <XtermQuestionModal />} {/* 모달 상태에 따라 모달 렌더링 */}
        </div>
    );
}

export default XtermUrlProvider;