"use client"

import React from "react";
import Button from "@/components/uploadStage/Button";

interface SubmitStageButtonProps {
    onClick: () => void;
}

const SubmitStageButton: React.FC<SubmitStageButtonProps> = ({onClick}: { onClick: any }) => {
    return (
        <Button
            id="SubmitStageButton"
            labelText="스테이지 최종 등록하기"
            onClick={onClick}
            className="mt-4"
        />
    )
}

export default SubmitStageButton;