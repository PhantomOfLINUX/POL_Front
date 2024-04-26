import React from "react";

import LoginForm from "@/components/login/LoginForm";
import LoginSignupDescription from "@/components/description/LoginSignupDescription";
import Spacing80 from "@/components/spacing/Spacing80";

const login = () => {
    return (
        <div className="h-screen">
            <Spacing80></Spacing80>
            <LoginSignupDescription />
            <LoginForm />
        </div>
    );
};

export default login;
