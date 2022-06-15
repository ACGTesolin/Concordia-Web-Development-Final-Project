import styled from "styled-components";
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton";
import LogOutButton from "./LogOutButton";
import {useAuth0} from "@auth0/auth0-react";
import BeerSearchBar from "./BeerSearchBar"
import {IoIosBeer} from "react-icons/io";
import {GiFactory} from "react-icons/gi";
import {CgProfile} from "react-icons/cg";

const Header = () => {

    const {user, isAuthenticated} = useAuth0();

    return (

        <Wrapper>
            <LogoWrapper>
                <Title to="/home">
                    <Logo src="/Broue-ManceWhiteLogoOrange.png"/>
                     </Title>
            </LogoWrapper>

            <SearchLoginWrapper>
                <BeerSearchBar/>
             
           
                <Beers to="/beers"><IoIosBeer size={40}/></Beers>
                <Brewery to="/breweries"><GiFactory size={40}/></Brewery>
                { isAuthenticated &&  (
                <Profile to="/my-account"><CgProfile size={40}/></Profile>
                )}
                   <LoginButton/>
                     <LogOutButton/>
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


const Title = styled(Link)`
font-family: "Bungee Inline";
color: var(--color-Yellow);
text-decoration: none;
font-size: 50px;
height:150px;
`;

const SearchLoginWrapper = styled.div`
display:flex;
/* flex-direction:column ; */
margin-right:60px;
align-items: center;
gap:20px;

`;


const Beers =styled(Link)`
color: var(--color-Yellow);
  
`;

const Brewery = styled(Link)`
color: var(--color-Yellow);
`;

const Profile = styled(Link)`
color: var(--color-Yellow);
`;

const Logo = styled.img`
height: 150 px;
width: 150px;
`;