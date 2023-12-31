import HeaderLoginBtn from "./HeaderLoginBtn";
import HeaderSignUpBtn from "./HeaderSignUpBtn"
import HeaderHomeBtn from "./HeaderHomeBtn";


const Header = () => {
    return (
        <header>
            <HeaderHomeBtn/>
            <HeaderLoginBtn/>
            <HeaderSignUpBtn/>
        </header>
    )
}


export default Header;