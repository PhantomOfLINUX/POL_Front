const url = process.env.NEXT_PUBLIC_BASE_API;

export const LoginInLocally = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string,
    password: string,
    setShowAlert: (show: boolean) => void,
    setAlertMessage: (message: string) => void
) => {
    e.preventDefault();
    try {
        const loggedIn = await fetch(`${url}/api/auth/login`, {
            credentials: "include",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: id,
                password,
            }),
        });
        if (loggedIn.ok) {
            setAlertMessage(`어서오세요, ${id}님`);
            setShowAlert(true);
            setTimeout(() => {
                window.location.replace("/");
            }, 100);
        } else {
            alert("아이디 또는 비밀번호가 맞지 않습니다.");
        }
    } catch (error) {
        console.error("로그인 요청 중 오류 발생: ", error);
    }
};
