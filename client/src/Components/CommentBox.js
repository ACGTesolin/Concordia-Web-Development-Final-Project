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

    //stores the text entered in the textEntry state
    const handleChange = (event) => {
      setTextEntry(event.target.value);
     
    };

    //this function retrieves all the comments for a specific beer from the database
    useEffect(() => {

      fetch(`/api/get-comments/${id}`)

      .then((res) => res.json())

      .then((data) => {

        setComments(data.data)
      })

      .catch((error) =>{

      })

    },[])
  
    //this function adds the the user's comment to the database
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
            //add the new comments to the comments state and repopulate the feed in realtime
            const newComment = data.data;
            let currentComments = [newComment, ...comments]
            setComments(currentComments)
          })
          .catch((error) => {
        
          });
      }
      setTextEntry("");//erase the entered text from the input area
    };
  
 
    
    return (
      
        <CommentBoxWrapper>
      {comments && 
      <div>
          <NewComment onSubmit={handleSubmit}>
            <CommentInput
              placeholder= {isAuthenticated ? "What do you think of this beer?" : "Log In to comment on this beer and see other comments!"}
              onChange={handleChange}
              aria-label="new-tweet-here"
              value={textEntry}
            ></CommentInput>
   {isAuthenticated &&( //comments can only be made if the user is authenticated
              <Button
                type="submit"
                value="comment"
                aria-label="Send comment"
               
              >
                Comment
              </Button>
      )}

          </NewComment>
           {comments.map((comment)=>{//map all the comments for a specific beer into the feed
             return (
              <Comment key={comment._id}
              avatarSrc={comment.avatar}
              handle={comment.name}
              text={comment.comment}
              commentId={comment._id}
              />
             )
          })}
          </div>
        }
    </CommentBoxWrapper>
        
    );
  };


export default CommentBox;



const CommentBoxWrapper = styled.div`
  border-bottom: 10px;
  margin-left:50px;
  
  `;

  const NewComment = styled.form`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin: 0 15px;
`;


const CommentInput = styled.textarea`
  color: var(--color-DarkGray);
  resize: none;
  width: 100%;
  width: 500px;
  height: 150px;
  font-size: 18px;
  font-family: "varela";
  border: 0px solid;
  border-radius:5px;
  padding:10px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
font-family: "varela";
background-color: var(--color-Yellow);
margin-top: 20px;
margin-bottom: 30px;
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