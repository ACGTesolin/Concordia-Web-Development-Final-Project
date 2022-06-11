import styled from "styled-components";
import {useContext} from "react";
import AgeContext from "../AgeContext";
import {useNavigate} from "react-router-dom";

const VerificationContent = () => {

    const navigate = useNavigate();

    const {ageVerification, setAgeVerification} = useContext(AgeContext);

    const handleClick = () => {
        setAgeVerification(!ageVerification);
        navigate("/home")
        window.sessionStorage.setItem("verification", JSON.stringify(true));
              
      };
console.log(AgeContext)
    return(


            <VerWrapper>
<Title>Broue-Mance </Title>
        <Restriction>This page is age restricted. </Restriction>
        <VLabel>
                
                Please verify that you are 18 years or older
            </VLabel>
            <Input
                type="verification"
            
                onClick={handleClick}
                >Verify</Input>
        </VerWrapper>


    )
}

export default VerificationContent;

const Restriction = styled.h2`
font-size: 40px;
font-family: "varela";
font-weight:bold;
color:var(--color-DarkGray);
`;

const VerWrapper = styled.div`
text-align: center;
position:relative;`;

const Title = styled.h1`
font-family: "Bungee Inline";
font-size: 80px;
margin-bottom: 30px;
color: var(--color-Yellow);
`;



const VLabel = styled.div`
font-family: "varela";
color:var(--color-DarkGray);
`;

const Input = styled.button`
border:none;
border-radius: 15px;
background-color: var(--color-Yellow);
font-family: "varela";
color: var(--color-DarkGray);
height:30px;
width:100px;
&
:hover {
    cursor: pointer;
    transform:scale(1.06)
}
`;


