import React from "react";
import ResetPasswordForm from "@/components/resetpassword/ResetPasswordForm";
import LoginSignupDescription from "@/components/description/LoginSignupDescription"
import ResetPasswordDescription from "@/components/description/ResetPasswordDescription"

const ChangePassword = () => {

    return (
        <div>
            <ResetPasswordDescription />
            <ResetPasswordForm />
        </div>
    )
}


export default ChangePassword;