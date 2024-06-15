"use client"

import React, { useState } from "react";

import { useSearchParams, useRouter, usePathname } from 'next/navigation'

import Image from "next/image";

const ProblemStageForm = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);

    const SubmitInput = (ele: React.FormEvent<HTMLFormElement>) => {
        ele.preventDefault()
        if (inputValue)
            params.set("searchText", inputValue)
        else params.delete("searchText")
        router.push(pathname + "?" + params.toString());
    };


    return (
        <form onSubmit={(e) => { SubmitInput(e) }} className="bg-gray-0 flex items-center justify-center p-3 my-2 w-8/12 h-12 border-solid border rounded-md border-gray-600">
            <button type="submit">
                <Image
                    src={`./problemStage/problemStageInput.svg`}
                    alt="problemFind"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px' }}
                />
            </button>
            <input
                placeholder="문제 제목 또는 설명으로 찾아볼 수 있어요"
                className="ml-3 w-full h-full outline-none text-gray-900 placeholder-gray-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}

            />
        </form>
    )
}


export default ProblemStageForm