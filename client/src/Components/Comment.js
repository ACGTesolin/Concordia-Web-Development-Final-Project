import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";



const Comment = ({avatarSrc, handle, text, commentId}) => {

  const {isAuthenticated} = useAuth0();

    return (
  
    <CommentWrapper key={commentId}>
{isAuthenticated &&
      <Header>
        <Avatar src={avatarSrc} />
        <UserInfo>
          <NameInfo>
            <Username>{handle}</Username>
          </NameInfo>

          <Text>
            {text}
          </Text>
        </UserInfo>
      </Header>
      }
    </CommentWrapper>

);
};

export default Comment;

const Header = styled.header`
display: flex;
`;

const CommentWrapper = styled.div`
border-bottom: 1px solid;
border-color: var(--color-Gray);
padding-right: 16px;
margin: 15px;
text-align: left;
`;

const NameInfo = styled.div`
padding: 0 16px;
display: flex;
justify-content: left;
align-items: center;
flex-direction: row;
flex: 1;
`;


const Username = styled.div`
color: var(--color-DarkGray);
font-size: 15px;
font-weight: bold;
margin-left: 8px;
line-height: 20px;
`;

const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50px;
`;
const UserInfo = styled.div`
display: block;
`;


const Text = styled.div`
padding: 3px 16px;
background-color: var(--color-ghostWhite);
margin-left:10px;
margin-bottom: 10px;
border: solid 2px black;
border-radius: 5px;
font-family: "varela";
&:hover {
  cursor: pointer;
}
`;




