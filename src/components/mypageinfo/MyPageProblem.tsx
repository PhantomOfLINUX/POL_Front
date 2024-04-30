'use client'
import React from "react";
import Link from "next/link";
import useMyPageCompletedStore from "@/store/myPageCompleteStore";
import useMyPageInProgressStore from "@/store/myPageInProgressStore";
import HeatmapForm from "./Heatmap";

const MyPageProblemForm = () => {
    const { completed, completedList } = useMyPageCompletedStore();
    const { inProgress } = useMyPageInProgressStore();
    return (
        <div className="border border-2 rounded-md">
            <div className="px-6 py-5">

                <div className="font-bold pl-2">
                    총 <a className="font-extra-bold">{completed}</a>개 문제 해결
                </div>
                <div className="py-2">
                    <div className="border border-2 rounded-md">
                        <div className="pl-2 py-3">
                            {completedList + ', '}
                        </div>
                    </div>
                </div>

                <br />
                <div className="font-bold pl-2">
                    진행중인 문제
                </div>
                <div className="py-2">
                    <div className="border border-2 rounded-md">
                        <div className="pl-2 py-3">
                            {inProgress + ', '}
                        </div>
                    </div>
                </div>
                <br />
                <div className="border border-2 rounded-md">
                    <div className="pr-5">
                        <HeatmapForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPageProblemForm;