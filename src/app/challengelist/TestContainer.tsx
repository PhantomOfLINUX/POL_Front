import React from "react";
import ShakeButton from "@/components/button/ShakeButton";
import AnswerCheckButton from "@/components/button/AnswerCheckButton";

const TestContainer = () => {
    return (
        <div className="h-1/2 w-full flex flex-col justify-center items-center">
            <p>이 문장은 SCoreDream 폰트의 기본 두께로 표시됩니다.</p>
            <p className="font-light">이 문장은 SCoreDream 폰트의 light 두께(300)로 표시됩니다.</p>
            <p className="font-normal">이 문장은 SCoreDream 폰트의 normal 두께(400)로 표시됩니다.</p>
            <p className="font-medium">이 문장은 SCoreDream 폰트의 medium 두께(500)로 표시됩니다.</p>
            <p className="font-bold">이 문장은 SCoreDream 폰트의 bold 두께(500)로 표시됩니다.</p>
            <p className="font-SCoreDream font-black">이 문장은 SCoreDream 폰트의 black 두께(700)로 표시됩니다.</p>
            <p className="font-black">이 문장은 SCoreDream 폰트의 black 두께(700)로 표시됩니다.</p>
        </div>
    )
}

export default TestContainer