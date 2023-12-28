import Header from "../components/header/Header"
//(로그인 안함)버튼 로그인 회원가입 (로그인 함)버튼 로그아웃

const HeaderLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}


export default HeaderLayout