"use client"

import React, {useState} from "react";
import Textarea from "@/components/uploadStage/Textarea";
import Input from "@/components/uploadStage/Input";
import { StageUploadRequest } from "@/types/stageType";

interface UploadStageContainerProps {
    stageUploadRequest: StageUploadRequest;
    onStageChange: (field: keyof StageUploadRequest, value: string) => void;
}

const UploadStageContainer: React.FC<UploadStageContainerProps> = ({stageUploadRequest, onStageChange,}) => {
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onStageChange("title", event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onStageChange("description", event.target.value);
    };

    return (
        <div className="w-full flex flex-col items-center m-8">
            <Input
                id={"StageTitleInput"}
                labelText={"스테이지 제목"}
                value={stageUploadRequest.title}
                onChange={handleTitleChange}
                placeholder={"제목을 입력해주세요."}
            />
            <Textarea
                labelText={"스테이지 설명"}
                message={stageUploadRequest.description}
                onChange={handleDescriptionChange}
            />
        </div>
    )
}

export default UploadStageContainer