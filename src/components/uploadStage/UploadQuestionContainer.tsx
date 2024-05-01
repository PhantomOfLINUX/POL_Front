"use client"

import React, {useState} from "react";
import Textarea from "@/components/uploadStage/Textarea";
import Input from "@/components/uploadStage/Input";
import Button from "@/components/uploadStage/Button";

interface UploadQuestionContainerProps {
    id: number;
    index: number;
    onRemove: (id: number) => void;
}

const UploadQuestionContainer: React.FC<UploadQuestionContainerProps> = ({ id, index, onRemove }) => {
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleCorrectAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCorrectAnswer(event.target.value);
    };

    const handleRemove = () => {
        onRemove(id);
    };


    return (
        <div
            className="w-5/6 flex flex-col items-center border-2 border-solid border-gray-300 rounded-3xl my-12 py-4"
        >
            <span className="text-xl font-bold">{index + 1}번 문항</span>
            <Input
                id={"QuestionTitleInput"}
                labelText={"문제 제목"}
                value={title}
                onChange={handleTitleChange}
                placeholder={"문제 제목을 입력해주세요. 예시) '파일 목록 조회 해보기' "}
            />
            <Textarea
                labelText={"문제 요구사항"}
                message={message}
                onChange={handleMessageChange}
                placeholder={"\"문제 요구사항을 입력해주세요."}
            />
            <Input
                id={"QuestionCorrectAnswerInput"}
                labelText={"문제 정답"}
                value={correctAnswer}
                onChange={handleCorrectAnswerChange}
                placeholder={"문제 정답을 입력해주세요."}
            />
            <div className="w-full flex">
            <Button
                id={`RemoveQuestionButton-${index}`}
                labelText="문항 삭제"
                onClick={handleRemove}
                className="bg-danger-500 hover:bg-danger-600 w-1/5 ml-auto mr-6 border-0"
            />
            </div>
        </div>
    )
}

export default UploadQuestionContainer