import {useAuth0} from "@auth0/auth0-react";
import styled from "styled-components";

const LogOutButton = () => {

    const {logout, isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
        <Button onClick={()=>logout()}>

            Log Out

        </Button>
        )
    )
};


export default LogOutButton;

const Button = styled.button``;