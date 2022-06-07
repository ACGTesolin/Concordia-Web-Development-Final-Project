import styled from "styled-components";
import { useEffect, useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";

const Beer = () => {

    const [beer, setBeer] = useState();
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError]= useState(false);

    useEffect(() =>{

        fetch(`/api/beer/${id}`)
    
        .then((response) => response.json())
    
        .then((data) => {
            if(data.status === 200){
            setBeer(data.data[0])
            console.log(data.data)
            setIsLoaded(true)
            }
        })
        .catch((error) =>{
            setError(true)
        })
    
       },[]);

       return (

        <Wrapper>
            {beer &&
            <Content>
            <ImgWrapper>
                <Img src={beer.img}></Img>
            </ImgWrapper>
            <InfoWrapper>
                <Name>{beer.name}</Name>
                <Type>{beer.type}</Type>
                <Abv>ABV: {beer.abv}</Abv>
                <Description>{beer.description}</Description>
                <Brewery to = {`/brewery/${beer.breweryId}`}>Go to: {beer.brewery}</Brewery>
            </InfoWrapper>
            </Content>
}
        </Wrapper>

       )

};

export default Beer;

const Brewery = styled(Link)`
font-family: "varela";
color: var(--color-Yellow);
`;

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
justify-content:space-around;
background-color: var(--color-DarkGray); 

`;

const ImgWrapper = styled.div`
height:200px;
width:200px;
`;

const Img = styled.img`
height:490px;
width:380px;
`;

const InfoWrapper = styled.div`
height:420px;
width:440px;
color: var(--color-ghostWhite);
display:flex;
flex-direction: column;
justify-content:center;
gap:20px;
margin-left:30px;
`;

const Name = styled.div`
font-family: "Bungee Inline";
color: var(--color-Yellow);
font-size: 30px;
`;

const Type = styled.div`
font-family: "varela"

`;

const Abv = styled.div`
font-family: "varela";
font-size:14px;
color: var(--color-ghostWhite)
`;

const Description = styled.div`
font-family: "varela";
`;

const Content = styled.div`
display:flex;
margin-top:90px;


`;