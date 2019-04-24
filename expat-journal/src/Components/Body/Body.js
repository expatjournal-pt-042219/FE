import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MyTravels from "./MyTravels";
import AboutUs from "./AboutUs";
import LogIn from "./Login";
import Home from "./Home";

import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 2%;
  &:hover{
    color:aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0,0,0,0.7);
  }
`;

const LinkWrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
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
