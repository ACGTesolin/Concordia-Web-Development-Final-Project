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
            setBeer(data.data)
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
            <div>
            <ImgWrapper>
                <Img src={beer.img}></Img>
            </ImgWrapper>
            <InfoWrapper>
                <Name>{beer.name}</Name>
                <Type>{beer.type}</Type>
                <Abv>{beer.abv}</Abv>
                <Description>{beer.description}</Description>
                <Brewery to = {`/brewery/${beer.breweryId}`}>{beer.brewery}</Brewery>
            </InfoWrapper>
            </div>
}
        </Wrapper>

       )

};

export default Beer;

const Brewery = styled(Link)``;

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
justify-content:center;
align-items: center;
background-color: var(--color-DarkGray); 

`;

const ImgWrapper = styled.div`
height:200px;
width:200px;
`;

const Img = styled.img``;

const InfoWrapper = styled.div`
height:500px;
width:500px;
color: var(--color-ghostWhite);
`;

const Name = styled.div``;

const Type = styled.div``;

const Abv = styled.div``;

const Description = styled.div``;