import styled from "styled-components";
import { useEffect, useState} from "react";
import { useParams, Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import CommentBox from "../Components/CommentBox";
import Rate from "../Components/Rate";
import Loading from "../Components/Loading";


const Beer = () => {

    const [beer, setBeer] = useState();
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError]= useState(false);
    const {user, isAuthenticated} = useAuth0();
    const [isFavourite, setIsFavourite] = useState(null);
   
 

//this function retrieves information on a single beer from the database
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

    //this function adds a favourited beer to the database 
    const handleSubmit = ((e) => {

        e.preventDefault();
        setIsFavourite(e)
   
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

//this function is used to check whether or not the current user has favourited the specific beer and change the favourite button
 useEffect(()=>{

        fetch(`/api/beer-favourites/${id}`)
     
        .then(response => response.json())

        .then((data) => {
           
            let userFav = data.data.filter((fav => fav.id === user.sub))
            setIsFavourite(userFav)
         
        })

        .catch((error) =>{
            console.log(error.stack)
        })

    },[])
    
    if (isLoaded === false) return <Loading/>

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

                        { isAuthenticated && isFavourite.length === 0 ? (//favourite button only appears if logged in and not favourite
                        <Favourite onClick={handleSubmit}> Add Favourite</Favourite>
                        ):(isFavourite && isFavourite.length === 1 ? (<FavMsg>Favourite</FavMsg>):(null))}

                    </InfoWrapper>
            </Content>
                
            }
            <Rate/>
                <CommentWrapper>
                        
                        <CommentBox/>
            
            </CommentWrapper>

        </Wrapper>
    )
};

export default Beer;

const FavMsg = styled.div`
color: var(--color-Yellow);
font-family: "varela";
border: solid 1px var(--color-Yellow);
text-align: center;
border-radius: 20px;
`;

const CommentWrapper = styled.div`
border: solid 1px var(--color-Yellow);
margin-top: 40px;
margin-left:150px;
width:75%;
height:40%;
margin-bottom: 40px;
padding:30px;
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
flex-direction: column;
`;

const ImgWrapper = styled.div`
height:200px;
width:200px;
`;

const Img = styled.img`
height:200%;
width:100%;
margin-left: 150px;
`;

const InfoWrapper = styled.div`
height:420px;
width:440px;
color: var(--color-ghostWhite);
display:flex;
flex-direction: column;
justify-content:center;
gap:20px;
margin-left:190px;
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