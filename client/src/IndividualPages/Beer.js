import styled from "styled-components";
import { useEffect, useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import CommentBox from "../Components/CommentBox";


const Beer = () => {

    const [beer, setBeer] = useState();
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError]= useState(false);
    const {user, isAuthenticated} = useAuth0();
    const [favourite, setFavourite] = useState(null);
    let faveArray = [];

    

    useEffect(() =>{

        fetch(`/api/beer/${id}`)
    
        .then((response) => response.json())
    
        .then((data) => {
            if(data.status === 200){
            setBeer(data.data[0])
            setIsLoaded(true)
            }
        })
        .catch((error) =>{
            setError(true)
        })
    },[]);

    const handleSubmit = ((e) => {

        e.preventDefault();

        fetch("/api/add-favourite", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json",
            },
            body: JSON.stringify({id:user.sub, beerId:beer._id, name:beer.name, img:beer.img})
        })
        .then((response) => response.json())

        .then((data) => {

            setIsLoaded(true)
        })

        .catch((error) =>{
            setError(true)
        })


    });

       return (

        <Wrapper>
            {beer && isLoaded &&
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
                    {isAuthenticated && (
                    <Favourite onClick={handleSubmit}> Add Favourite</Favourite>
                    )}
                </InfoWrapper>
            </Content>
                
            }
            <CommentWrapper>
            <CommentBox/>
            
            </CommentWrapper>

        </Wrapper>
    )
};

export default Beer;

const CommentWrapper = styled.div`
min-height:100vh;
`;

const Favourite = styled.button`
border-radius:20px;
border:none;
background-color:var(--color-Yellow);
color:var(--color-DarkGray);
font-family: "varela";
&
:hover{
    cursor: pointer;
    transform:scale(1.06);
}
`;

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