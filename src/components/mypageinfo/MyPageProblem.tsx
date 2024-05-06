'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";
import useMyPageCompletedStore from "@/store/myPageCompleteStore";
import useMyPageInProgressStore from "@/store/myPageInProgressStore";
import HeatmapForm from "./Heatmap";




const MyPageProblemForm = () => {
    const { completed, completedList } = useMyPageCompletedStore();
    const { inProgress, inProgressList } = useMyPageInProgressStore();
    const clist = completedList || [];
    const plist = inProgressList || [];
    return (
        <div className="border-2 rounded-md">
            <div className="px-6 py-5">

                <div className="font-bold pl-2">
                    {/* 총 <a className="font-extra-bold">{completed}</a>개 문제 해결 */}
                    해결한 문제 "{completed} 문제"
                </div>
                <div className="py-2">
                    <div className="border-2 rounded-md">
                        <div className="pl-2 py-3">
                            <div>
                                {clist.map((item, index) => (
                                    <button key={index} className="border-2 rounded-md mr-2">
                                        <div className="p-1">
                                            {item}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <div className="font-bold pl-2">
                    진행중인 문제 "{inProgress} 문제"
                </div>
                <div className="py-2">
                    <div className="border-2 rounded-md">
                        <div className="pl-2 py-3">
                            <div>
                                {plist.map((item, index) => (
                                    <button key={index} className="border-2 rounded-md mr-2">
                                        <div className="p-1">
                                            {item}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="border-2 rounded-md">
                    <div className="pr-5">
                        <HeatmapForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPageProblemForm;