import React from "react";
import Link from "next/link";
import './page.css'

const Introduction = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Link href={"/challengelist"}>문제 풀러가기</Link>
            </div>
        </div>

    )
}


export default Introduction;