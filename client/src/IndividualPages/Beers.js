import styled from "styled-components";
import {useContext, useState} from "react";
import BeerInfoContext from "../BeerInfoContext"
import {useNavigate} from "react-router-dom";

const Beers = () => {

    const navigate = useNavigate();
    const {allBeers} = useContext(BeerInfoContext);
    const [beerFilterWord, setBeerFilterWord] = useState("");

    const handleClick = (beerId) => {//navigate to a specific beer
        navigate(`/beer/${beerId}`)
    }

    //filters items on page by category
    const filterBeers = allBeers.filter(beer => beer.filter === beerFilterWord);


    //changes category to filter by
    const selectBeerFilterWord = (ev) => {
    
        setBeerFilterWord(ev.target.value);
     
   };

return (
    <Wrapper>
        {allBeers && filterBeers && filterBeers.length > 0 ? (//checks to see if filter is being used if so beers are filtered
             <>
         <Form>
        <label>
          <Select
            id="filter"
            value={beerFilterWord}
            onChange={(ev) => selectBeerFilterWord(ev)}
          >
            <option value="">All</option>
            <option value="IPA">IPA</option>
            <option value="Sour">Sour</option>
            <option value="Special">Special</option>
            <option value="Wheat">Wheat</option>
            <option value="Stout">Stout</option>
            <option value="PaleLager/Pilsener">PaleLager/Pilsener</option>
            
          </Select>
        </label>
      </Form>
   
   
        {filterBeers.map((beer)=>{//render all filtered beers to page
            return (
                <Button key={beer._id}
                name="individualBeer"
                type="button"
                onClick={() => {
                handleClick(beer._id)
                  }}>
                    <BeerWrapper key={beer._id}>
                        <div>
                        <BeerImg src = {beer.img} />
                        </div>
                        <Name>{beer.name}</Name>
                        <Type>Type: {beer.type}</Type>
                        <ABV>ABV: {beer.abv}</ABV>
                        <Brewery>Brewery: {beer.brewery}</Brewery>
                    </BeerWrapper>
                </Button>
            )
        })}
 </>

):(
<>
    <Form>
        <label>
            <Select
                id="filter"
                value={beerFilterWord}
                onChange={(ev) => selectBeerFilterWord(ev)}
            >
                <option value="">All</option>
                <option value="IPA">IPA</option>
                <option value="Sour">Sour</option>
                <option value="Special">Special</option>
                <option value="Wheat">Wheat</option>
                <option value="Stout">Stout</option>
                <option value="PaleLager/Pilsener">PaleLager/Pilsener</option>
            
            </Select>
        </label>
      </Form>
   
    
        {allBeers.map((beer)=>{//render entire list of beers to page if filter is not being used
            return (
                <Button key={beer._id}
                    name="individualBeer"
                    type="button"
                    onClick={() => {
                    handleClick(beer._id)
                    }}>
                    <BeerWrapper key={beer._id}>
                        <div>
                        <BeerImg src = {beer.img} />
                        </div>
                        <Name>{beer.name}</Name>
                        <Type>Type: {beer.type}</Type>
                        <ABV>ABV: {beer.abv}</ABV>
                        <Brewery>Brewery: {beer.brewery}</Brewery>
                    </BeerWrapper>
                </Button>
            )
        })}
 </>
)}

    </Wrapper>

    );
};

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--color-DarkGray); 
background-repeat:no-repeat;
background-size: cover;

`;

const BeerWrapper = styled.div`
font-family:"Varela";
display: flex;
align-items:center;
justify-content: left;
margin:30px;
gap:10px;
`;

const BeerImg = styled.img`
height:100px;
width:40px;
`;

const Name = styled.div`
color: var(--color-Yellow);
font-weight:bold;
display:flex;
font-family:"Bungee Inline";
`;
 
const Type = styled.div`
color:var(--color-ghostWhite);
display:flex;
flex-direction: column;
`;

const ABV = styled.div`
color:var(--color-ghostWhite);
display:flex;
flex-direction: column;
`;

const Brewery = styled.div`
color:var(--color-ghostWhite);
display:flex;
flex-direction: column;
`;

const Button = styled.button`
background-color: var(--color-DarkGray);
border:solid 2px var(--color-Yellow);
justify-content:left;
position:relative;
left:30px;
width:70%;
border-right:none;
border-left: none;
margin:10px;
&
:hover{
    transform:scale(1.06);
    cursor:pointer;
}
`;

const Form = styled.form`
    margin-bottom: 20px;
  `;

const Select = styled.select`
padding: 5px;
border: 1px solid #f2f2f2;
width: 250px;
`;

export default Beers;