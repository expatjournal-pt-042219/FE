import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MyTravels from "./MyTravels";
import AboutUs from "./AboutUs";
import LogIn from "./Login";
import Home from "./Home";

import styled from "styled-components";

const StyledLink = styled(Link)`
  
`;

const LinkWrapper = styled.div`

`;

class Body extends Component {
  render() {
    return (
      <div>
        <LinkWrapper>
          <StyledLink to="/">Login</StyledLink>

          <StyledLink to="/Home">Home</StyledLink>

          <StyledLink to="/MyTravels">My Travels</StyledLink>

          <StyledLink to="/AboutUs">About Us</StyledLink>

        </LinkWrapper>

        <Route path="/" exact component={LogIn} />
        <Route path="/Home" exact component={Home} />
        <Route path="/MyTravels/" component={MyTravels} />
        <Route path="/AboutUs/" component={AboutUs} />
      </div>
    );
  }
}

export default Body;
