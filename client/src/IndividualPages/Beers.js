import styled from "styled-components";
import {useContext} from "react";
import BeerInfoContext from "../BeerInfoContext"
import {useNavigate} from "react-router-dom";

const Beers = () => {

    const navigate = useNavigate();

    const {allBeers} = useContext(BeerInfoContext);

    const handleClick = (beerId) => {
        navigate(`/beer/${beerId}`)
    }

return (
    <Wrapper>
    {allBeers &&
    <>
        {allBeers.map((beer)=>{
            return (
                <Button key={beer._id}
                name="individualBeer"
                type="button"
                onClick={() => {
                handleClick(beer._id)
                  }}>
                    <BeerWrapper key={beer._id}>
                        <div>
                        <BeerImg src = {beer.img} />
                        </div>
                        <Name>{beer.name}</Name>
                        <Type>Type: {beer.type}</Type>
                        <ABV>ABV: {beer.abv}</ABV>
                        <Brewery>Brewery: {beer.brewery}</Brewery>
                    </BeerWrapper>
                </Button>
            )
        })}
 </>
}
    </Wrapper>

);

};

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--color-DarkGray); 
background-repeat:no-repeat;
background-size: cover;

`;

const BeerWrapper = styled.div`
font-family:"Varela";
display: flex;
align-items:center;
justify-content: left;
margin:30px;
gap:10px;
`;

const BeerImg = styled.img`
height:100px;
width:40px;
`;

const Name = styled.div`
color: var(--color-Yellow);
font-weight:bold;
display:flex;
font-family:"Bungee Inline";
`;
 
const Type = styled.div`
color:var(--color-ghostWhite);
display:flex;
flex-direction: column;
`;

const ABV = styled.div`
color:var(--color-ghostWhite);
display:flex;
flex-direction: column;
`;

const Brewery = styled.div`
color:var(--color-ghostWhite);
display:flex;
flex-direction: column;
`;

const Button = styled.button`
background-color: var(--color-DarkGray);
border:solid 2px var(--color-Yellow);
justify-content:left;
position:relative;
left:30px;
width:70%;
border-right:none;
border-left: none;
margin:10px;
&
:hover{
    transform:scale(1.06);
    cursor:pointer;
}
`;

export default Beers;