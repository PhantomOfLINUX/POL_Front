import HeaderBtn from "./HeaderBtn";


const Header = () => {
    return (
        <header>
            <span>Phantom of  Linux</span>
            <HeaderBtn name={"로그인"}/>
            <HeaderBtn name={"회원가입"}/>
        </header>
    )
}


export default Header;