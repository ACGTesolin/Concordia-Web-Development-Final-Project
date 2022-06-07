import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Verification from "./IndividualPages/Verification";
import Home from "./IndividualPages/Home";
import Login from "./IndividualPages/Login";
import Beers from "./IndividualPages/Beers";
import Breweries from "./IndividualPages/Breweries";
import Brewery from "./IndividualPages/Brewery";
import Profile from "./IndividualPages/Profile";
import Location from "./IndividualPages/Location";
import Beer from "./IndividualPages/Beer";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
 
      <Wrapper>
        <Router>
          <GlobalStyles />
          <Header/>
  
          <ContentContainer>
          <Routes>
            <Route path  ="/" element={<Verification/>} />
            <Route path ="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/beers" element={<Beers/>} />
            <Route path="/beer/:id" element={<Beer/>} />
            <Route path="/breweries" element={<Breweries/>} />
            <Route path="/brewery/:id" element={<Brewery/>} />
            <Route path="/my-account" element={<Profile/>} />
            <Route path="/location" element={<Location/>} />
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
