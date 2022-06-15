import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Verification from "./IndividualPages/Verification";
import Home from "./IndividualPages/Home";
import Login from "./IndividualPages/Login";
import Beers from "./IndividualPages/Beers";
import Breweries from "./IndividualPages/Breweries";
import Brewery from "./IndividualPages/Brewery";
import Profile from "./IndividualPages/Profile";
import Beer from "./IndividualPages/Beer";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {useAuth0} from "@auth0/auth0-react"
import AgeContext from "./AgeContext";
import {useContext} from "react";

const App = () => {
  const {ageVerification} = useContext(AgeContext);

  const {isLoading, isAuthenticated} = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
 
      <Wrapper>
      
        <Router>
          <GlobalStyles />
          {ageVerification &&
          <Header/>
          }
          <ContentContainer>
          <Routes>
            <Route path  ="/" element={<Verification/>} />
            <Route path ="/home" element={ageVerification ? <Home/> : <Navigate to="/"/> } />
            <Route path="/login" element={<Login/>} />
            <Route path="/beers" element={ageVerification ? <Beers/> : <Navigate to="/"/>} />
            <Route exact path="/beer/:id" element={ageVerification ? <Beer/> : <Navigate to="/"/>} />
            <Route path="/breweries" element={ageVerification ? <Breweries/> : <Navigate to="/"/>} />
            <Route path="/brewery/:id" element={ageVerification ? <Brewery/> : <Navigate to="/"/>} />
            <Route path="/my-account" element={!ageVerification  ? <Navigate to="/"/> : ageVerification && !isAuthenticated ? <Navigate to="/home"/> :  <Profile/>   } />
          </Routes>
          </ContentContainer>
  
          <div className="footer">
            <Footer />
          </div>
        </Router>
       
      </Wrapper>
    );
  }
  
  
  
  const Wrapper = styled.div`
  
  .footer{
      position: relative;
      left: 0;
      bottom: 0;
  }
      
      `
  const ContentContainer = styled.div`
      min-height: calc(100vh - 34px);
  `


export default App;
