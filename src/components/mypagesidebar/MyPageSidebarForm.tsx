'use client'
import React from "react";
import Link from "next/link";
import { useState } from "react";
import MyPageInfoForm from "../mypageinfo/MyPageInfo";
import mypage from "@/app/mypage/page";



const MyPageSidebarForm = () => {
    //path 태그들은 싹다 사이드바 아이콘 

    const [myPageSelector, setMyPageSelector] = useState(1);



    return (

        <div className="w-60 text-white p-3 bg-thema-color rounded-lg mr-36 h-1/2">
            < div className="flex items-center p-2 space-x-4" >
                {/* <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500"> */}
                < div >
                    <h2 className="text-lg font-semibold">마이페이지</h2>
                    <span className="flex items-center space-x-1">
                        <a className="text-xs hover:underline">View profile</a>
                    </span>
                </div >
            </div >
            <div className="divide-y">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="dark:bg-gray-800 dark:text-gray-50">
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                            </svg> */}
                            <button onClick={() => { (setMyPageSelector(1)) }}>
                                나의 정보
                            </button>
                            {/* <MyPageInfoForm myPageSelector={myPageSelector}/> */}
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <span>활동 기록</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <span>구독 관리</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <span>계정 설정</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <span>문제 현황</span>
                        </a>
                    </li>
                </ul>
                <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <span>환경 설정</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <span>로그 아웃</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}


export default MyPageSidebarForm;