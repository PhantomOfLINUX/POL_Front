import React from "react";
import Google from "./socialSVG/google.svg"
import KaKao from "./socialSVG/kakao.svg"
import Naver from "./socialSVG/naver.svg"
import Github from "./socialSVG/github.svg"
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div className="flex mt-8 w-80 h-social-height justify-evenly items-center border-t border-socialBorder-color0 relative border-text">
            <Google/>
            <KaKao/>
            <Naver/>
            <Github/>
        </div>
    )
}

export default SocialLogin
