import HeaderLoginBtn from "./HeaderLoginBtn";
import HeaderSignUpBtn from "./HeaderSignUpBtn"
import HeaderHomeBtn from "./HeaderHomeBtn";

const Header = () => {
    return (
        <header className="flex w-full justify-between">
            <HeaderHomeBtn />
            <div className="flex">
                <HeaderLoginBtn />
                <HeaderSignUpBtn />
            </div>
        </header>
    )
}


export default Header;