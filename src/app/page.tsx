import React from "react";
import Link from "next/link";

import MainGoButton from "@/components/mainGoButton/MainGoButton";
import ComponentViewGoButton from "@/components/mainGoButton/ComponentViewGoButton";
import UploadStageGoButton from "@/components/mainGoButton/UploadStageGoButton";
import Spacing80 from "@/components/spacing/Spacing80";
import LoginSignupDescription from "@/components/description/LoginSignupDescription";
import LoginForm from "@/components/login/LoginForm";

const Introduction = () => {
    return (
        <div className="page-container h-screen w-full bg-gray-50">
            <div className="content-wrap flex flex-col mx-48 my-12">
                <p className="font-bold text-4xl my-8 flex items-end">
                    <span className="text-blue-500 text-5xl">POL</span>
                    과 함께 리눅스 학습하기
                </p>
                <p className="text-xl font-normal text-gray-700">웹에서 바로 터미널을 사용하여 리눅스를 이용할 수 있습니다.</p>
                <p className="text-xl font-normal text-gray-700">실제 자격증 기출을 기반으로 만들어진 문제를 통해 리눅스를 학습해보세요</p>
                <MainGoButton />
                {/*<ComponentViewGoButton/>*/}
                {/*<UploadStageGoButton/>*/}
            </div>
        </div>

    )
}

export default Introduction;
