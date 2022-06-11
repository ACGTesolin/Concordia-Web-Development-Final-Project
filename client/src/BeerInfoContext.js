import {createContext, useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

const BeerInfoContext = createContext(null);


export const BeerInfoProvider = ({children}) => {

    const {user} = useAuth0();

    const [allBeers, setAllBeers] = useState();

    const [allBreweries, setAllBreweries] = useState();

    const [favourites, setFavourites] = useState();

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

        <BeerInfoContext.Provider value={{allBeers, allBreweries, favourites, setFavourites}}>
            {children}
        </BeerInfoContext.Provider>

    );
};

export default BeerInfoContext;