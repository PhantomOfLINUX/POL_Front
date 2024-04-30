"use client"

import React, {useState} from "react";
import Textarea from "@/components/uploadStage/Textarea";

interface Token {
    accessToken: string | undefined,
    refreshToken: string | undefined
}

interface Stage {
    id: string;
    stageCode: string,
    title: string;
    description: string;
    difficultyLevelType: string;
    questionCount: number;
    completedStatus: string;
}

const UploadStageContainer: React.FC<Token> = ({accessToken, refreshToken}) => {
    const [message, setMessage] = useState("");

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    return (
        <div
            className="w-3/5 min-h-screen bg-gray-0 flex flex-col items-center border-2 border-solid border-gray-300 rounded-3xl my-12"
        >
            <Textarea
                labelText={"스테이지 설명"}
                message={message}
                onChange={handleMessageChange}
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