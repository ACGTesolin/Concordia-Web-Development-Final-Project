import {createContext, useState} from "react";

const AgeContext = createContext(null);//this context provides information as to whether or not the user has verified there age


export const AgeProvider = ({children}) => {

    const [ageVerification, setAgeVerification] = useState(window.sessionStorage.getItem('verification') ? JSON.parse(window.sessionStorage.getItem('verification')) : false);

    return (

        <AgeContext.Provider value={{ageVerification, setAgeVerification}}>

                {children}

        </AgeContext.Provider>
    )

};

export default AgeContext