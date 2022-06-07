import styled from "styled-components";
import {useContext} from "react";
import BeerInfoContext from "../BeerInfoContext"
import {useNavigate} from "react-router-dom";

const Breweries = () => {

    const {allBreweries}= useContext(BeerInfoContext);
    
    const navigate = useNavigate();

    const handleClick = (breweryId) => {
        navigate(`/brewery/${breweryId}`)
    }

    return (

    <Wrapper>

{allBreweries &&
    <>
        {allBreweries.map((brewery)=>{
            // console.log(beer.img)
            return (
                <BreweryButton
                key={brewery._id}
                name="individualBrewery"
                type="button"
                onClick={() => {
                  handleClick(brewery.id);
                }}>
                <BreweryWrapper >
                    <BreweryLogo src = {brewery.logo} />
                    <Name>{brewery.name}</Name>
                </BreweryWrapper>
                </BreweryButton>
            )
        })}
    </>
}
    </Wrapper>
    );
};

export default Breweries;

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
justify-content: space-evenly;
background-color: var(--color-DarkGray); 
background-repeat:no-repeat;
background-size: cover;
`;

const BreweryWrapper = styled.div`
font-family: "Bungee Inline";
color:var(--color-Yellow);

`;

const BreweryLogo = styled.img``;

const Name = styled.div``;

const BreweryButton = styled.button`
background-color: var(--color-DarkGray);
border:solid 3px  var(--color-Yellow);
height:300px;
width:200px;
margin-top:130px;

&
:hover{
    cursor:pointer;
    transform:scale(1.3);
    border:solid 5px  var(--color-Yellow);
}
`;

