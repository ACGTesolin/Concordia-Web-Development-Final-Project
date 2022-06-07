import styled from "styled-components";
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton";
import LogOutButton from "./LogOutButton";

const Header = () => {

    return (

        <Wrapper>
            <LogoWrapper>
                <Logo></Logo>
                <Title to="/home">Placeholder</Title>
            </LogoWrapper>

            <SearchLoginWrapper>
                <SearchBar>SearchPlaceholder</SearchBar>
                <LoginButton/>
                <LogOutButton/>
                <Beers to="/beers">Beers</Beers>
                <Brewery to="/breweries">Breweries</Brewery>
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

const Title = styled(Link)`
font-family: "Bungee Inline";
color: var(--color-Yellow);
text-decoration: none;
font-size: 50px;
`;

const SearchLoginWrapper = styled.div`
display:flex;
flex-direction: column;
margin-right:60px;
`;

const SearchBar = styled.div``;

const Login = styled.button``;

const Beers =styled(Link)``;

const Brewery = styled(Link)``;