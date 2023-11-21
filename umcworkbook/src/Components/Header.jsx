import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #1c1c55;
    display: flex;
    align-items: center;
    padding: 10px 20px;
`;

const StyledLink = styled(RouterLink)`
    color: white;
    margin-left: 20px; 
    text-decoration: none; 
`;

const Buttons = styled.div`
    border-radius:20px;
    background-color: white;
    color:black;
    padding: 3px 20px;
    margin-left:20px;
    cursor: pointer; 
`;

const LoginNotice = styled.div`
    color:white;
    margin-left:20px;
`;

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const navigate = useNavigate();

    const handleLoginToggle = () => {
        if (!isLoggedIn) {
            navigate('/login'); 
        } else {
            setIsLoggedIn(false); 
        }
    };

    return (
        <>
        <HeaderContainer>
            <RouterLink to="/">
                <img
                    style={{ 
                        width: "154px", 
                        height: "20px", 
                        marginLeft: "50px", 
                        backgroundSize: "cover",
                        backgroundPosition: "left"
                    }}
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="로고"
                />
            </RouterLink>
            <StyledLink to="/movie">영화</StyledLink> 
            <StyledLink to="/">TV 프로그램</StyledLink>
            <StyledLink to="/">인물</StyledLink>
            <Buttons onClick={handleLoginToggle}>
                {isLoggedIn ? '로그아웃' : '로그인'}
            </Buttons>
            <LoginNotice>
                {isLoggedIn ? '환영합니다!' : '로그인 해주세요!!!'}
            </LoginNotice>
        </HeaderContainer>
        </>
    )
}

export default Header;
