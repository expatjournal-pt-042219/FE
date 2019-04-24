import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const BackgroundLayer = styled.div`
  text-align: center;
  background: lightgrey;
  color:white;
  height: 100%;
  background-size: cover;
  min-height: 100vh;
  background-repeat:no-repeat;
  
`;


class App extends Component {
  render() {
    return (
      <BackgroundLayer>
          <Header />
          <Router>
            <Body />
          </Router>
          <Footer />
      </BackgroundLayer>
    );
  }
}

export default App;
