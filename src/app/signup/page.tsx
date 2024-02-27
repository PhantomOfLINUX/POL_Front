import React from "react";

import SignUpForm from "@/components/signup/SignUpForm";
import LoginSignupDescription from "@/components/description/LoginSignupDescription"


const Signup = () => {
    
    return (
        <div>
            <LoginSignupDescription/>
            <SignUpForm/>
        </div>
    )
}


export default Signup;