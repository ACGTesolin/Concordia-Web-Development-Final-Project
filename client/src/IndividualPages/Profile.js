import {useAuth0} from "@auth0/auth0-react";
import styled from "styled-components";

const Profile = () => {

    const {user, isAuthenticated} = useAuth0();

    return (
isAuthenticated && (
        <Wrapper>
            <Img src={user.picture} /> 
            <h2> {user.name}</h2>
            <p>{user.email}</p>
            {JSON.stringify(user, null, 2)}
        </Wrapper>
    )

    )
};

export default Profile;

const Wrapper = styled.div``;

const Img = styled.img``;