import React from "react";
import GoButton from "@/components/GoButton/GoButton";
import Footer from "@/components/footer/Footer";
import './page.css'

const Introduction = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                Introduction
                <GoButton />
            </div>
            <Footer />
        </div>

    )
}


export default Introduction;