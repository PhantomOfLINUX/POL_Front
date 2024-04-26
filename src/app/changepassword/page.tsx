import React from "react";
import ChangePasswordToken from "@/components/changepassword/ChangePasswordToken";
import ChangePasswordDescription from "@/components/description/ChangePasswordDescription"


const ChangePassword = () => {

    return (
        <div>
            <ChangePasswordDescription />
            <ChangePasswordToken />
        </div>
    )
}


export default ChangePassword;