import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleClick = () => {
    logout();
    sessionStorage.clear();
  };
  return isAuthenticated && <Button onClick={handleClick}>Log Out</Button>;
};

export default LogOutButton;

const Button = styled.button`
  border: none;
  background-color: var(--color-Yellow);
  font-family: "varela";
  color: var(--color-DarkGray);
  border-radius: 5px;
  &
  :hover{
    cursor: pointer;
  }
`;
