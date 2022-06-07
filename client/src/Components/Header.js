import styled from "styled-components";
import {Link } from "react-router-dom";

const Header = () => {

    return (

        <Wrapper>
            <LogoWrapper>
                <Logo></Logo>
                <Title>Placeholder</Title>
            </LogoWrapper>

            <SearchLoginWrapper>
                <SearchBar>SearchPlaceholder</SearchBar>
                <Login></Login>
            </SearchLoginWrapper>
           
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
height:150px;
min-width:100vw;
background-color:var(--color-Gray);

`;

const LogoWrapper = styled.div``;

const Logo = styled.img``;

const Title = styled.h1`
font-family: "Bungee Inline";
color: var(--color-Yellow);
`;

const SearchLoginWrapper = styled.div``;

const SearchBar = styled.div``;

const Login = styled.button``;