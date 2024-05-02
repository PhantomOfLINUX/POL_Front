import React from "react";
import HomeRouteButton from "@/components/button/HomeRouteButton";
import AskRouteButton from "@/components/button/AskRouteButton";
import Spacing128 from "@/components/spacing/Spacing128";

const NotFound = () => {
    return (
        <div className="h-11/12 w-full bg-gray-0 flex flex-col justify-center items-center text-center space-y-6">
            <p className={`text-info-600 text-3xl font-bold`}>404</p>
            <p className={`text-gray-900 text-4xl font-bold`}>Page Not Found</p>
            <p>현재 페이지를 찾을 수 없어요</p>
            <div className={`flex flex-row w-1/5 items-center`}>
                <HomeRouteButton labelText={"< 홈으로 이동하기"} toPath={"/"} />
                <AskRouteButton labelText={"문의하러 가기 >"} toPath={"/"} />
            </div>
            <Spacing128/>
        </div>
    )
}

export default NotFound;