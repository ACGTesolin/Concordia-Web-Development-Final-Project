import {createContext, useEffect, useState} from "react";

const BeerInfoContext = createContext(null);


export const BeerInfoProvider = ({children}) => {

    const [allBeers, setAllBeers] = useState();

    const [allBreweries, setAllBreweries] = useState();



    useEffect(() => {

        fetch ("/api/breweries")
            .then((response) => response.json())
            .then((data) => {
                
                setAllBreweries(data.data)
            })    
    },[]);

     useEffect(() => {

        fetch ("/api/beers")
        
            .then((response) => response.json())
            .then((data) => {
               
                setAllBeers(data.data)
            })
    },[]);


    return (

        <BeerInfoContext.Provider value={{allBeers, allBreweries}}>
            {children}
        </BeerInfoContext.Provider>

    );
};

export default BeerInfoContext;