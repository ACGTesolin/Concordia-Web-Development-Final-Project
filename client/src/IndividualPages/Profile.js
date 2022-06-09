import {useAuth0} from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();
    const {user, isAuthenticated} = useAuth0();
    const [favourites, setFavourites] = useState();
    const [deleteId, setDeleteId] = useState();


    const handleClick = (beerId) => {
        navigate(`/beer/${beerId}`)
    };
    
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

    const handleDelete = ((e)=>{

        // e.preventDefault();

        setDeleteId(e)
if (deleteId){
        fetch(`/api/delete-favourites/${e}`, {
            method: "DELETE",
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json",
            },
        })

        .then(response => response.json())

        .then((data) => console.log(data))
     
        .catch((error) =>{
            console.log(error.stack)
        })
    }
    });
    console.log(deleteId);

    return (
isAuthenticated && favourites && (
        <Wrapper>
            <InfoWrapper>
                <Img src={user.picture} /> 
                <h2> {user.name}</h2>
                <p>{user.email}</p>
            {/* {JSON.stringify(user, null, 2)} */}
            </InfoWrapper>
                <FavouriteWrapper>
                    <h2>Favourite Beers</h2>
                {favourites.map((favourite)=>{
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
                            <Delete onClick={() => {handleDelete(favourite._id)}}>Remove</Delete>
                    </Fav2>
                    )
                })} 
            </FavouriteWrapper>
        </Wrapper>
        )
    )
};

export default Profile;

const Wrapper = styled.div`
min-height:100vh;
min-width:100vw; 
display:flex;
flex-direction: column;
background-color: var(--color-DarkGray); 
`;

const InfoWrapper = styled.div``;

const FavouriteWrapper = styled.div``;

const Favourite = styled.button`
display:flex;
margin:60px;
align-items: center;
background-color: var(--color-DarkGray);
border: none;
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

const Img = styled.img``;

const Fav2 = styled.div``;

const Delete = styled.button`
border: none;
background-color: var(--color-Yellow);
border-radius:20px;
font-family: "varela";
color: var(--color-DarkGray);
&
:hover{
    cursor: pointer;
    transform:scale(1.07);
}
`;



