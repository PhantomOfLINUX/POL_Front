import React from "react";
import ResetPasswordForm from "@/components/resetpassword/ResetPasswordForm";
import ResetPasswordDescription from "@/components/description/ResetPasswordDescription"

const ResetPassword = () => {

    return (
        <div>
            <ResetPasswordDescription />
            <ResetPasswordForm />
        </div>
    )
}


export default ResetPassword;