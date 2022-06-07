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
        console.log(beer.img)
            return (
                <Button key={beer._id}
                name="individualBeer"
                type="button"
                onClick={() => {
                handleClick(beer._id)
                  }}>
                    <BeerWrapper key={beer._id}>
                        <BeerImg src = {beer.img} />
                        <Name>{beer.name}</Name>
                        <Type>{beer.type}</Type>
                        <ABV>{beer.abv}</ABV>
                        <Brewery>{beer.brewery}</Brewery>
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

`;

const BeerImg = styled.img``;

const Name = styled.div`
color: var(--color-Yellow);
font-weight:bold;
`;
 
const Type = styled.div`
color:var(--color-ghostWhite);
`;

const ABV = styled.div`
color:var(--color-ghostWhite);
`;

const Brewery = styled.div`
color:var(--color-ghostWhite);
`;

const Button = styled.button`
background-color: var(--color-DarkGray);
border:none;
&
:hover{
    transform:scale(1.06);
    cursor:pointer;
}
`;

export default Beers;