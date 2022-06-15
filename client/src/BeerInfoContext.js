import {createContext, useEffect, useState} from "react";


const BeerInfoContext = createContext(null);//this context is used to provide the information on all beers and breweries to the rest of the components


export const BeerInfoProvider = ({children}) => {

 

    const [allBeers, setAllBeers] = useState();

    const [allBreweries, setAllBreweries] = useState();

    const [favourites, setFavourites] = useState();

    //this function retrieves a list of all the breweries from the database
    useEffect(() => {

        fetch ("/api/breweries")
            .then((response) => response.json())
            .then((data) => {
                
                setAllBreweries(data.data)
            })    
    },[]);

    //this function retrieves a list of all the beers from the database
     useEffect(() => {

        fetch ("/api/beers")
        
            .then((response) => response.json())
            .then((data) => {
               
                setAllBeers(data.data)
            })
    },[]);

   


    return (

        <BeerInfoContext.Provider value={{allBeers, allBreweries, favourites, setFavourites}}>
            {children}
        </BeerInfoContext.Provider>

    );
};

export default BeerInfoContext;