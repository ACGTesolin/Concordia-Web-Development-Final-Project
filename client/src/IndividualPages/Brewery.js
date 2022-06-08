import styled from "styled-components";
import { useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const Brewery = () => {

    const [beers, setBeers] = useState(null);
    const [brewery, setBrewery] = useState(null);
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError]= useState(false);
    const navigate = useNavigate();

   useEffect(() =>{

    fetch(`/api/brewery/${id}`)

    .then((response) => response.json())

    .then((data) => {
        if(data.status === 200){
        setBrewery(data.data)
        setIsLoaded(true)
        }
    })
    .catch((error) =>{
        setError(true)
    })

   },[]);

   useEffect(() =>{

    fetch(`/api/brewery-beers/${id}`)

    .then((response) => response.json())

    .then((data) => {
        if (data.status===200){
        setBeers(data.data)
        setIsLoaded(true)
        }
    })
    .catch((error) =>{
        setError(true)
    })
},[]);

const handleClick = (beerId) => {
    navigate(`/beer/${beerId}`)
}
return (
    <Wrapper>
{brewery &&
        <BreweryContainer>
        <BreweryLogo src={brewery[0].logo}/>
        <BrewName>{brewery[0].name}</BrewName>
        <InfoWrapper>
            <Info>
                <Address>{brewery[0].adress}</Address>
                <Establishment>{brewery[0].estType}</Establishment>
            </Info>
            <Info>
                <Brewer>Head Brewer: {brewery[0].brewer}</Brewer>
                <Founded>Founded: {brewery[0].founded}</Founded>
                <Website href={brewery[0].website}>{brewery[0].website}</Website>
            </Info>
            

        </InfoWrapper>
     </BreweryContainer>
     
}
<Break/>

    {beers && brewery &&

    <BeersWrapper>
        {beers.map((beer)=>{
            return (
                <Button key={beer._id}
                name="individualBeer"
                type="button"
                onClick={() => {
                handleClick(beer._id)
                }}>
                <BeerWrapper key={beer._id}>
                    <BeerImg src={beer.img[0] === "." ? beer.img.slice(1) : beer.img }/>
                    <Name>{beer.name}</Name>
                    <Type>{beer.type}</Type>
                    <ABV>{beer.abv}</ABV>
                </BeerWrapper>
                </Button>
            )
        })}
 </BeersWrapper>

}
    </Wrapper>

    );
};

export default Brewery;

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
flex-wrap: wrap;
justify-content:center;
align-items: center;
background-color: var(--color-DarkGray); 
background-repeat:no-repeat;
background-size: cover;

`;

const BeerWrapper = styled.div`
font-family:"Varela";
border:solid 1px  var(--color-Gray);
width:250px;
height:250px;
margin:20px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
box-shadow: 1px 1px 0 0 var(--color-Gray);
`;

const BeerImg = styled.img`
height:100px;
width:60px;
`;

const Name = styled.div`
color: var(--color-Yellow);
font-weight:bold;
`;
 
const Type = styled.div`
color:var(--color-ghostWhite);
font-size:12px;
`;

const ABV = styled.div`
color:var(--color-ghostWhite);
`;

const BeersWrapper = styled.div`
display:flex;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
`;

const BreweryContainer = styled.div`
height:200px;
min-width: 100vw;
margin-bottom: 20px;
margin-top:30px;
display: flex;
align-items: center;
`;

const BreweryLogo = styled.img`
height:190px;
width: 190px;
margin-left: 90px;
margin-right: 30px;
border-radius:50%;
`;

const BrewName = styled.h1`
font-family: "Bungee Inline";
color: var(--color-Yellow);
font-size: 50px;
`;

const InfoWrapper = styled.div`
color: var(--color-ghostWhite);
margin-left: 50px;
font-family: "Varela"
`;

const Info = styled.div``;

const Address = styled.div``;

const Establishment = styled.div``;

const Brewer = styled.div``;

const Founded = styled.div``;

const Break = styled.hr`
border:solid 1px; 
color: var(--color-Yellow);
width: 90%;
margin-top: 50px;
margin-bottom: 50px;

`;

const Website = styled.a`
color: var(--color-Yellow);
`;

const Button = styled.button`
background-color: var(--color-DarkGray);
border:none;
&
:hover{
    transform: scale(1.06);
    cursor: pointer;
}
`;

