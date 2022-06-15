import styled from "styled-components";
import VerificationContent from "../Components/VerificationContent"



const Verification = () => {


    return(
        
        <Wrapper>
            <Background></Background>
                <VerificationContent/>
        </Wrapper>
    )
};

export default Verification;

const Wrapper = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
min-height: calc(100vh - 150px);
min-width: 100vw;
`;

const Background = styled.div`
    background-image: url("/taps.avif");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    opacity:0.5;
    min-height: calc(100vh + 150px);
    width: 100%;
    `;



