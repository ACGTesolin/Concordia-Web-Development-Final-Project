import styled from "styled-components";



const Comment = ({avatarSrc, handle, text, commentId}) => {


    return (
    <>
    <CommentWrapper key={commentId}>

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
    </CommentWrapper>
  </>
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

const DisplayName = styled.div`
font-weight: bold;
text-decoration: none;
font-size: 15px;
line-height: 20px;
&:hover {
  text-decoration: underline;
  cursor: pointer;
}
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
const ProfileButton = styled.button`
background-color: white;
border: 0px;

&:hover {
  cursor: pointer;
}
`;

const Text = styled.div`
padding: 3px 16px;
&:hover {
  cursor: pointer;
}
`;




