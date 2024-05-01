"use client"

import React, {useState} from "react";
import UploadStageContainer from "@/components/uploadStage/UploadStageContainer";
import UploadQuestionContainer from "@/components/uploadStage/UploadQuestionContainer";
import AddQuestionButton from "@/components/uploadStage/AddQuestionButton";

interface UploadStageFormProps {
    accessToken: string | undefined;
    refreshToken: string | undefined;
}

const UploadStageForm: React.FC<UploadStageFormProps> = ({accessToken, refreshToken}) => {
    const [questionContainers, setQuestionContainers] = useState([{ id: 0 }]);

    const handleAddQuestion = () => {
        setQuestionContainers((prevContainers) => [
            ...prevContainers,
            { id: Date.now() },
        ]);
    };

    const handleRemoveQuestion = (id: number) => {
        setQuestionContainers((prevContainers) =>
            prevContainers.filter((container) => container.id !== id)
        );
    };

    return (
        <div
            className="w-3/5 min-h-screen bg-gray-0 flex flex-col items-center border-2 border-solid border-gray-300 rounded-3xl my-12 px-12">
            <UploadStageContainer
                accessToken={accessToken}
                refreshToken={refreshToken}
            />
            {questionContainers.map((container, index) => (
                <UploadQuestionContainer
                    key={container.id}
                    id={container.id}
                    index={index}
                    onRemove={handleRemoveQuestion}
                />
            ))}
            <AddQuestionButton onClick={handleAddQuestion} />
        </div>
    );
};

export default UploadStageForm;