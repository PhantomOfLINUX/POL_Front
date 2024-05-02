"use client"

import React, {useState} from "react";
import Textarea from "@/components/uploadStage/Textarea";
import Input from "@/components/uploadStage/Input";
import Button from "@/components/uploadStage/Button";
import SelectBox from "@/components/uploadStage/SelectBox";
import {Question} from "@/types/questionType";

interface UploadQuestionContainerProps {
    id: number;
    index: number;
    onRemove: (id: number) => void;
    onChange: (id: number, field: keyof Question, value: string) => void;
    question: Question;
}

const UploadQuestionContainer: React.FC<UploadQuestionContainerProps> = ({
                                                                             id,
                                                                             index,
                                                                             onRemove,
                                                                             onChange,
                                                                             question,
                                                                         }) => {
    const handleChange = (field: keyof Question, value: string) => {
        onChange(index, field, value);
    };

    const handleRemove = () => {
        onRemove(id);
    };


    return (
        <div
            className="w-5/6 flex flex-col items-center border-2 border-solid border-gray-300 rounded-3xl my-12 py-4"
        >
            <span className="text-xl font-medium">{index + 1}번 문항</span>
            <Input
                id={"QuestionTitleInput"}
                labelText={"문제 제목"}
                value={question.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder={"문제 제목을 입력해주세요. 예시) '파일 목록 조회 해보기' "}
            />
            <Textarea
                labelText={"문제 요구사항"}
                message={question.description || ""}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder={"문제 요구사항을 입력해주세요."}
            />
            <SelectBox
                id={`AnswerTypeSelect-${id}`}
                labelText="정답 유형"
                value={question.answerType}
                onChange={(e) => handleChange("answerType", e.target.value)}
                options={[
                    { value: "SHORT_ANSWER", label: "단답형" },
                    { value: "PRACTICAL", label: "실습형" },
                ]}
            />
            {question.answerType === "PRACTICAL" &&
                <SelectBox
                    id={`IsComposableSelect-${id}`}
                    labelText="환경구성 필요 여부"
                    value={question.isComposable}
                    onChange={(e) => handleChange("isComposable", e.target.value)}
                    options={[
                        { value: "true", label: "환경 구성 필요" },
                        { value: "false", label: "환경 구성 필요 없음" },
                    ]}
                />}
            {question.answerType !== "PRACTICAL" &&
                <Input
                    id={"QuestionCorrectAnswerInput"}
                    labelText={"문제 정답"}
                    value={question.correctAnswer}
                    onChange={(e) => handleChange("correctAnswer", e.target.value)}
                    placeholder={"문제 정답을 입력해주세요."}
                />
            }
            <div className="w-full flex">
                <Button
                    id={`RemoveQuestionButton-${index}`}
                    labelText="문항 삭제"
                    onClick={handleRemove}
                    className="bg-danger-400 hover:bg-danger-500 w-1/5 ml-auto mr-16 border-0"
                />
            </div>
        </div>
    )
}

export default UploadQuestionContainer