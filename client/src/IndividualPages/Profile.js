import {useAuth0} from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Loading from "../Components/Loading";

const Profile = () => {

    const navigate = useNavigate();
    const {user, isAuthenticated} = useAuth0();
    const [favourites, setFavourites] = useState();
    const [deleteId, setDeleteId] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

//navigate to a specific beer page
    const handleClick = (beerId) => {
        navigate(`/beer/${beerId}`)

    };
    
    //retrieves all the favourited beers for a specific user
    useEffect(()=>{

        fetch(`/api/favourites/${user.sub}`)
     
        .then(response => response.json())

        .then((data) => {
            setFavourites(data.data)
        })

        .catch((error) =>{
            console.log(error.stack)
        })

    },[])

    //removes a favourited beer from the database
    const handleDelete = ((e)=>{

        // e.preventDefault();

        setDeleteId(e)

        fetch(`/api/delete-favourites/${e}`, {
            method: "DELETE",
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json",
            },
        })

        .then(response => response.json())

        .then((data) => {
        
            if(data.status === 200){
            let newFavs = favourites.filter(fav => fav._id !== data.data);//update the favourite list in real time when remove is clicked

            return setFavourites(newFavs)
         
            }
        })
     
        .catch((error) =>{
            console.log(error.stack)
        })

    });

    {(isLoaded === false) && <Loading/>}
    return (
isAuthenticated && favourites &&  (
        <Wrapper>
            <InfoWrapper>
                <Img src={user.picture} /> 
                <Name> {user.name}</Name>
                <Email>{user.email}</Email>
       
            </InfoWrapper>
            <HR/>
                <FavouriteWrapper>
                    <FavTitle>Favourite Beers</FavTitle>
                    <HR/>
                {favourites.map((favourite)=>{//render all the favourited beers for the user
                    return(
                    <Fav2 key={favourite._id}>
                        <Favourite 
                        name="individualBeer"
                        type="button"
                        onClick={() => {
                        handleClick(favourite.beerId)
                        }}>
                            
                            <BeerName>{favourite.name}</BeerName>
                            <BeerImg src={favourite.img}/>
                          
                        </Favourite>
                        <Delete onClick={() => {
                                setDeleteId(favourite._)
                                handleDelete(favourite._id)
                                }}>Remove</Delete>
                            <HR/>
                    </Fav2>
                      
                    )
                })} 
                  
            </FavouriteWrapper>
          
        </Wrapper>
        )
    )
};

export default Profile;

const FavTitle = styled.div`
margin-top: 30px;
font-family: "varela";
font-size:30px;
color: var(--color-Yellow);
`;

const HR = styled.hr`
width:80%;
color:var(--color-ghostWhite);
margin-top:40px;
`;

const Name = styled.h2`
font-family: "Bungee Inline";
color: var(--color-Yellow);
font-size:40px;
`;

const Email = styled.div`
font-family: "varela";
color: var(--color-Gray);
`;

const Wrapper = styled.div`
min-height:100vh;
min-width:100vw; 
display:flex;
align-items: center;
flex-direction: column;
background-color: var(--color-DarkGray); 
`;

const InfoWrapper = styled.div`
display:flex;
align-items: center;
flex-direction: column;
margin-top:40px;
`;

const FavouriteWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:70%;

`;

const Favourite = styled.button`
display:flex;

margin:60px;
align-items: center;
justify-content: center;
background-color: var(--color-DarkGray);
border: none;
gap:20px;
&
:hover{
    cursor: pointer;
    transform: scale(1.06);
}
`;

const BeerImg = styled.img`
height:100px;
width:50px;

`;

const BeerName = styled.div`
margin-right:10px;
font-family: "Bungee Inline";
color: var(--color-Yellow);
`;

const Img = styled.img`
height:300px;
border-radius:50%;
`;

const Fav2 = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width:70%;
align-items: center;
`;

const Delete = styled.button`
border: none;
background-color: var(--color-Yellow);
border-radius:20px;
font-family: "varela";
color: var(--color-DarkGray);
height: 40px;
width:20%;
margin-left:40px;
&
:hover{
    cursor: pointer;
    transform:scale(1.07);
}
`;



