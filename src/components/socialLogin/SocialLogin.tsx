import React from "react";

import SocialLoginSVG from "./SocialLoginSVG";

import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div className="flex  mt-8 w-80 h-social-height justify-evenly items-center border-t border-gray-400 relative border-text">
            <SocialLoginSVG name="google"/>
            <SocialLoginSVG name="kakao"/>
            <SocialLoginSVG name="naver"/>
            <SocialLoginSVG name="github"/>
        </div>
    )
}

export default SocialLogin
