"use client"

import React, {useState} from "react";
import UploadStageContainer from "@/components/uploadStage/UploadStageContainer";
import UploadQuestionContainer from "@/components/uploadStage/UploadQuestionContainer";
import AddQuestionButton from "@/components/uploadStage/AddQuestionButton";
import SubmitStageButton from "@/components/uploadStage/SubmitStageButton";
import {Question} from "@/types/questionType";
import {StageUploadRequest} from "@/types/stageType";
import {uploadStageSet} from "@/utils/uploadStageUtils/UploadStageUtil";

interface UploadStageFormProps {
    accessToken: string | undefined;
    refreshToken: string | undefined;
}

const UploadStageForm: React.FC<UploadStageFormProps> = ({accessToken, refreshToken}) => {
    const [questionContainers, setQuestionContainers] = useState([{id: 0}]);
    const [questions, setQuestions] = useState<Question[]>([
        {
            title: "",
            description: "",
            answerType: "SHORT_ANSWER",
            correctAnswer: "",
            isComposable: "false",
        },
    ]);
    const [stageUploadRequest, setStageUploadRequest] = useState<StageUploadRequest>({
        title: "",
        description: "",
        questions: [],
    });

    const handleAddQuestion = () => {
        const newQuestionId = Date.now();
        setQuestionContainers((prevContainers) => [
            ...prevContainers,
            {id: newQuestionId},
        ]);
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            {
                title: "",
                description: "",
                answerType: "SHORT_ANSWER",
                correctAnswer: "",
                isComposable: "false",
            },
        ]);
    };

    const handleRemoveQuestion = (id: number) => {
        setQuestionContainers((prevContainers) =>
            prevContainers.filter((container) => container.id !== id)
        );
        setQuestions((prevQuestions) =>
            prevQuestions.filter((_, index) => index !== id)
        );
    };

    const handleQuestionChange = (id: number, field: keyof Question, value: string) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((question, index) => {
                if (index === id) {
                    return {...question, [field]: value};
                }
                return question;
            })
        );
    };

    const handleStageChange = (field: keyof StageUploadRequest, value: string) => {
        setStageUploadRequest((prevStage) => ({
            ...prevStage,
            [field]: value,
        }));
    };

    const submitStage = async () => {
        const emptyFields = questions.reduce<string[]>((acc, question, index) => {
            const emptyFieldsForQuestion = [];

            if (!question.title.trim()) {
                emptyFieldsForQuestion.push(`문항 ${index + 1}의 제목`);
            }

            if (!question.description.trim()) {
                emptyFieldsForQuestion.push(`문항 ${index + 1}의 요구사항`);
            }

            if (question.answerType !== "PRACTICAL" && !question.correctAnswer.trim()) {
                emptyFieldsForQuestion.push(`문항 ${index + 1}의 정답`);
            }

            if (emptyFieldsForQuestion.length > 0) {
                acc.push(...emptyFieldsForQuestion);
            }

            return acc;
        }, []);

        if (emptyFields.length > 0) {
            alert(`다음 필드를 입력해주세요:\n${emptyFields.join("\n")}`);
            return;
        }

        const stageUploadRequestWithQuestions: StageUploadRequest = {
            ...stageUploadRequest,
            questions: questions,
        };

        console.log(stageUploadRequestWithQuestions);
        await uploadStageSet(stageUploadRequestWithQuestions, accessToken);
    };

    return (
        <div
            className="w-3/5 min-h-screen bg-gray-0 flex flex-col items-center border-2 border-solid border-gray-300 rounded-3xl my-12 px-12">
            <UploadStageContainer
                stageUploadRequest={stageUploadRequest}
                onStageChange={handleStageChange}
            />
            {questionContainers.map((container, index) => (
                <UploadQuestionContainer
                    key={container.id}
                    id={container.id}
                    index={index}
                    onRemove={handleRemoveQuestion}
                    onChange={handleQuestionChange}
                    question={questions[index]}
                />
            ))}
            <AddQuestionButton onClick={handleAddQuestion}/>
            <SubmitStageButton onClick={submitStage}/>
        </div>
    );
};

export default UploadStageForm;