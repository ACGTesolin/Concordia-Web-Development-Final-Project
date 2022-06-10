import { useState, useContext } from "react";
import BeerInfoContext from "../BeerInfoContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BeerSearchBar = () => {
  const { allBeers } = useContext(BeerInfoContext);
  const [value, setValue] = useState(""); //value is the word being entered in search bar
  const [selectedBeerIndex, setSelectedBeerIndex] = useState(0); //for highlighting the suggestion with mouse/keyboard
  const [dropDownVisible, setDropDownVisible] = useState(true);

  let navigate = useNavigate();

  //for highlighting the part of the words in the search results matching the user's search value
  let firstHalf = "";
  let secondHalf = "";
  let stringIndex = 0;

  let matchedBeers =
    allBeers &&
    allBeers
      .filter((beer) => {
        return beer.name.toLowerCase().includes(value.toLowerCase());
      })
      .slice(0, 4); //only stores the first 4 search results, otherwise it'll display dozens of results

  const handleClick = (beerId) => {
    navigate(`/beer/${beerId}`);
    
  };

  return (
    <>
      {allBeers && (
        <Wrapper>
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Beers"
          />

          {value.length >= 2 && matchedBeers.length > 0 && (
            <BeerList isShown={dropDownVisible}>
              {matchedBeers.map((beer, index) => {
                const isSelected = selectedBeerIndex === index ? true : false;

                //for highlighting the part of the search results that match user's search value
                stringIndex = beer.name.toLowerCase().indexOf(value);
                firstHalf = beer.name.slice(0, stringIndex + value.length);
                secondHalf = beer.name.slice(stringIndex + value.length);

                return (
                  <Beer
                    key={beer._id}
                    style={{
                      backgroundColor: isSelected ? "lightgray" : "transparent",
                    }}
                    onMouseEnter={() => {
                      setSelectedBeerIndex(index);
                    }}
                    onClick={() => {
                      setValue(beer.name);
                      handleClick(beer._id);
                      setDropDownVisible(false)
                      window.location.reload();
                    }}
                  >
                    <span>
                      {firstHalf}
                      <Prediction>{secondHalf}</Prediction>
                    </span>
                  </Beer>
                  
                );
              })}
            
            </BeerList>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default BeerSearchBar;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;




const Input = styled.input`
  margin-bottom: 5px;
  height: 2rem;
  width: 250px;
  border-radius: 3px;
  margin-right: 10px;
  border: none;
  outline: none;
  color:var(--color-DarkGray);
  background-color: white;
  border: 1px solid #343a40;
  padding: 20px 6px;
  font-family:"varela";
  &:focus {
  }
`;

const BeerList = styled.ul`
  position: absolute;
  top: 30px;
  border: 1px lightgray solid;
  margin-top: 5px;
  display: ${(prop) => (prop.isShown ? "block" : "none")};
  padding: 0;
  background-color: whitesmoke;
  z-index: 2;
`;

const Beer = styled.li`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  list-style-type: none;
  cursor: pointer;
`;

const Prediction = styled.span`
  font-weight: bold;
`;
