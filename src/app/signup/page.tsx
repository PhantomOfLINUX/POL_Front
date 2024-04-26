import React from "react";

import SignUpForm from "@/components/signup/SignUpForm";
import LoginSignupDescription from "@/components/description/LoginSignupDescription";
import Spacing80 from "@/components/spacing/Spacing80";

const Signup = () => {
    return (
        <div>
            <LoginSignupDescription />
            <SignUpForm />
            <Spacing80></Spacing80>
        </div>
    );
};

export default Signup;
