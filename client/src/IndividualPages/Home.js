import styled from "styled-components";
import MapDisplay from "../Components/MapDisplay";

const Home = () => {

return (

    <Wrapper>
        <MapDisplay/>
    </Wrapper>

)
};

export default Home;

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
align-items: center;
justify-content: center;
background-color: var(--color-DarkGray); 
`;