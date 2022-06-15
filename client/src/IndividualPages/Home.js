import styled from "styled-components";
import MapDisplay from "../Components/MapDisplay";

const Home = () => {

return (

    <Wrapper>
        <Map>
        <Suggestion>Find a brewery</Suggestion>
        <MapDisplay/>
        </Map>
        <Title>A brief history of beer in Canada</Title>
        <History>In the early days, brewing was a domestic art, practiced by people in their own homes for personal enjoyment and special occasions.
        Canada's first recorded brewer was Jesuit Brother Ambroise, who began making beer in 1646 after the foundation of New France.
        A few years later, the Great Intendant Jean Talon, founded Canada's first commercial brewery in Québec City, to reduce his colony's dependence on imported brandy. 
        His brewery, which opened in 1688, was so successful that its brews were sold to the West Indies, making it the first Canadian beer ever exported.
        The Talon brewery only operated for five years, but its remains — known as the Talon Vaults — can still be seen in the lower city of old Québec. 
        Many of today's breweries have long histories, filled with colourful characters and incredible accomplishments.
        By 1786, John Molson established his first brewery in Montréal, which is today the oldest brewery in North America.  
        The rise of "craft" brewing has re-invigorated beer's brand within Canada. Today, Canadian beer drinkers have access to one of the largest selections of different beer brands and styles available anywhere in the world. At our last count, Canada is home to 1200 breweries and 5800 domestically made brands. 
        </History>
        <Source href="https://www.beercanada.com/beer-101/brief-history-beer-canada">Source: https://www.beercanada.com/beer-101/brief-history-beer-canada</Source>
    </Wrapper>

)
};

export default Home;

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
flex-direction: column;
align-items: center;

background-color: var(--color-DarkGray); 
`;

const Suggestion = styled.h2`
font-family: "Bungee Inline";
margin-bottom:40px;
color: var(--color-Yellow);
font-size: 40px;
`;

const Map = styled.div`
margin-top: 60px;
width:1200px;
display:flex;
align-items: center;
flex-direction: column;
`;

const History = styled.div`
font-family: "varela";
color: var(--color-ghostWhite);
width:50%;

`;

const Source = styled.a`
color: var(--color-Yellow);
font-family: "varela";
`;

const Title = styled.div`
font-family: "Bungee Inline";
margin-bottom:40px;
color: var(--color-Yellow);
font-size: 20px;
margin-top: 40px;
`;
