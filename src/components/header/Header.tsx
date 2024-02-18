import HeaderLoginBtn from "./HeaderLoginBtn";
import HeaderSignUpBtn from "./HeaderSignUpBtn"
import HeaderHomeBtn from "./HeaderHomeBtn";
import { cookies } from 'next/headers'

const Header = () => {
    const cookieStore = cookies()
    console.log(cookieStore)
    return (
        <header>
            <HeaderHomeBtn/>
            <HeaderLoginBtn/>
            <HeaderSignUpBtn/>
        </header>
    )
}


export default Header;