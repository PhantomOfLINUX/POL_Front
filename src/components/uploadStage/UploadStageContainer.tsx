"use client"

import React, {useState} from "react";
import Textarea from "@/components/uploadStage/Textarea";
import Input from "@/components/uploadStage/Input";
import UploadQuestionContainer from "@/components/uploadStage/UploadQuestionContainer";

interface Token {
    accessToken: string | undefined,
    refreshToken: string | undefined
}

interface Stage {
    id: number;
    stageCode: string,
    title: string;
    description: string;
    difficultyLevelType: string;
    questionCount: number;
    completedStatus: string;
}

const UploadStageContainer: React.FC<Token> = ({accessToken, refreshToken}) => {
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    return (
        <div className="w-full flex flex-col items-center">
            <Input
                id={"StageTitleInput"}
                labelText={"스테이지 제목"}
                value={title}
                onChange={handleTitleChange}
                placeholder={"제목을 입력해주세요."}
            />
            <Textarea
                labelText={"스테이지 설명"}
                message={message}
                onChange={handleMessageChange}
            />
        </div>
    )
}

export default UploadStageContainer