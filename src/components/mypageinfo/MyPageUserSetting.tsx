'use client'
import React, { useState, useRef } from "react";
import Link from "next/link";
import useMyPageProfileStore from "@/store/myPageProfileStore";
import useAuthStore from "@/store/authStore";
import { DeletePlayer } from "@/utils/deletePlayerUtils/DeletePlayerUtils";
import DeleteCompleteModal from "./DeleteCompleteModal";

interface MyPageInfoType {
    accessToken: string | undefined,
    refreshToken: string | undefined
}


// const MyPageUserSettingForm: React.FC<Props> = ({ accessToken }) => {

const MyPageUserSettingForm: React.FC<MyPageInfoType> = ({ accessToken, refreshToken }) => {
    const { userId } = useMyPageProfileStore();
    const [modal, setModal] = useState<boolean>(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <div>
            <div className="flex-col flex-auto float-right">
                <button type="button" className="flex justify-center items-center w-36 h-12 bg-thema-color text-white rounded">
                    <Link href="/changepassword">비밀번호 변경</Link>
                </button>
                <button type="button" className="flex justify-center items-center w-36 h-12 bg-thema-color text-white rounded"
                    onClick={() => { toggleModal() }}>
                    계정 삭제
                </button>
            </div>
            {modal &&
                (<div>
                    <div className="position: absolute w-full h-full z-0 top-0 left-0 right-0 bottom-0 bg-gray bg-opacity-30" onClick={() => toggleModal()}></div>
                    <div className="position: absolute top-1/3 left-1/4 z-20">
                        <div id="alert-additional-content-2" className="w-full p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                            <div className="flex items-center">
                                <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                <h3 className="text-lg font-medium">정말 계정을 삭제 하시겠습니까?</h3>
                            </div>
                            <div className="mt-2 mb-4 text-sm">
                                "계정 삭제" 버튼을 누르면 귀하의 모든 계정 정보 및 개인 정보가 사라지며 이는 복구 불가능 합니다. <br />그래도 삭제 하시겠습니까?
                            </div>
                            <div className="flex justify-between">
                                <button type="button" className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none 
                                focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 me-2 text-center 
                                inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                    onClick={(e) => { DeletePlayer(e, userId, accessToken) }}
                                >
                                    <Link href="/">계정 삭제</Link>
                                </button>
                                <button type="button" className="float-right text-red-800 bg-transparent border border-red-800 
                                hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none 
                                focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 
                                text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 
                                dark:hover:text-white dark:focus:ring-red-800"
                                    onClick={() => toggleModal()}>
                                    취소
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div >

    )
}

export default MyPageUserSettingForm;