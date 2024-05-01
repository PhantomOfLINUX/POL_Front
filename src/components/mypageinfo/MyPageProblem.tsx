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
<<<<<<< HEAD
        <div className="border border-2 rounded-md">
=======
        <div className="border-2 rounded-md">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
            <div className="px-6 py-5">

                <div className="font-bold pl-2">
                    총 <a className="font-extra-bold">{completed}</a>개 문제 해결
                </div>
                <div className="py-2">
<<<<<<< HEAD
                    <div className="border border-2 rounded-md">
=======
                    <div className="border-2 rounded-md">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
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
<<<<<<< HEAD
                    <div className="border border-2 rounded-md">
=======
                    <div className="border-2 rounded-md">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
                        <div className="pl-2 py-3">
                            {inProgress + ', '}
                        </div>
                    </div>
                </div>
                <br />
<<<<<<< HEAD
                <div className="border border-2 rounded-md">
=======
                <div className="border-2 rounded-md">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
                    <div className="pr-5">
                        <HeatmapForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPageProblemForm;