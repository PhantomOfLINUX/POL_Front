import HeaderLoginBtn from "./HeaderLoginBtn";
import HeaderSignUpBtn from "./HeaderSignUpBtn"
import HeaderHomeBtn from "./HeaderHomeBtn";

const Header = () => {
    return (
        <header className="flex w-full px-40 min-h-28 justify-between items-center">
            <HeaderHomeBtn />
            <div className="flex">
                <HeaderLoginBtn />
                <HeaderSignUpBtn />
            </div>
        </header>
    )
}


export default Header;