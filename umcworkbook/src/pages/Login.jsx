import styled from "styled-components";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const InsertP = styled.p`
    font-size: 3vw;
`;

const EmailP = styled.p`
    font-size: 2vw;
`;

const EmailInput = styled.input`
    width: 100%;
    height: 5vw;
`;

const PasswordInput = styled(EmailInput).attrs({
    type: 'password', // 비밀번호 입력 필드로 설정
})``;

const ConfirmButton = styled.button`
    margin-top: 3vw;
    border-radius: 30px;
    background-color: lightblue;
    height: 5vw;
    color: white;
`;

function Login() {
    return (
        <>
            <LoginContainer>
                <InsertP>이메일과 비밀번호를<br />입력해주세요</InsertP>
                <EmailP>이메일 주소</EmailP>
                <EmailInput type="email" /> {/* 이메일 입력 필드 */}
                <EmailP>비밀번호</EmailP>
                <PasswordInput /> {/* 비밀번호 입력 필드 */}
                <ConfirmButton>확인</ConfirmButton>
            </LoginContainer>
        </>
    );
}

export default Login;
