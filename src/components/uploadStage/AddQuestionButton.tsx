"use client"

import React from "react";
import Button from "@/components/uploadStage/Button";

interface AddQuestionButtonProps {
    onClick: () => void;
}

const AddQuestionButton: React.FC<AddQuestionButtonProps> = ({ onClick }) => {
    return (
        <Button
            id="AddQuestionButton"
            labelText="문항 추가하기"
            onClick={onClick}
            className="mt-4"
        />
    )
}

export default AddQuestionButton;