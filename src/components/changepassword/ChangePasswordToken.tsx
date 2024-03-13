import { cookies } from 'next/headers'
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePasswordToken = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")


    if (POL_ACCESS_TOKEN !== undefined) {
        console.log("asdf")
        return (
            <div>
                <ChangePasswordForm accessToken={POL_ACCESS_TOKEN.value} />
            </div >
        )
    }

}


export default ChangePasswordToken;