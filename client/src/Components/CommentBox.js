import styled from "styled-components";
import {useState, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useParams} from "react-router-dom";
import Comment from "../Components/Comment";

const CommentBox = () => {
    const [textEntry, setTextEntry] = useState("");
    const {user, isAuthenticated} = useAuth0();
    const {id} = useParams();
    const [comments, setComments] = useState();

    const handleChange = (event) => {
      setTextEntry(event.target.value);
     
    };
  
    const handleSubmit = (e) => {

      e.preventDefault();

      if (textEntry.length > 0) {

        fetch("/api/comment", {

          method: "POST",

          headers: {
            Accept: "application/json ",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ comment: textEntry, id:id, name: user.name, avatar: user.picture }),

        })
          .then((res) => res.json())
  
          .then((data) => {
          
          })
          .catch((error) => {
        
          });
      }
      setTextEntry("");
    };
  
    useEffect(() => {

      fetch(`/api/get-comments/${id}`)

      .then((res) => res.json())

      .then((data) => {
console.log(data.data)
        setComments(data.data)
      })

      .catch((error) =>{

      })

    },[])
    
    return (
      
        <CommentBoxWrapper>
      {comments && 
      <div>
          <NewComment onSubmit={handleSubmit}>
            <CommentInput
              placeholder= {isAuthenticated ? "What do you think of this beer?" : "Log In to comment on this beer!"}
              onChange={handleChange}
              aria-label="new-tweet-here"
              value={textEntry}
            ></CommentInput>
   {isAuthenticated &&(
              <Button
                type="submit"
                value="comment"
                aria-label="Send comment"
               
              >
                Comment
              </Button>
      )}

          </NewComment>
          {comments.map((comment)=>{
              <Comment
              avatarSrc={comment.avatar}
              handle={comment.name}
              text={comment.comment}
              commentId={comment._id}
              />
          })}
          </div>
          

          
      }
    
       
           
       
         
        </CommentBoxWrapper>
        
    );
  };


export default CommentBox;

const Wrapper = styled.div`

`;

const CommentBoxWrapper = styled.div`
  border-bottom: 10px;
  border: solid 1px;
  `;

  const NewComment = styled.form`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin: 0 15px;
`;


const CommentInput = styled.textarea`
  color: black;
  margin-top: 10px;
  resize: none;
  width: 100%;
  width: 500px;
  height: 150px;
  font-size: 18px;
  border: 0px solid;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
font-family: "varela";
background-color: var(--color-Yellow);
  color: var(--color-DarrkGray);
  height: 35px;
  width: 150px;
  border: 0px;
  border-radius: 30px;
  &
:hover{
    cursor: pointer;
    transform:scale(1.06);
}
`;