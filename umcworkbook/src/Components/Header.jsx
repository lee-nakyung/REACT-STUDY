import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #1c1c55;
    text-align:left;
`
function Header(){
    return (
        <>
        <HeaderContainer>
        <img
		style={{ width: "154px", height: "20px" }}
		src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		alt="로고"
        />
        <Link>영화</Link>
        <Link>TV 프로그램</Link>
        <Link>인물</Link>
        </HeaderContainer>
        </>
    )
}

export default Header;