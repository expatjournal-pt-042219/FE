import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
//  import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "./Background.jpg";

const BackgroundLayer = styled.div`
  text-align: center;
  background: url(${BackgroundImg});
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

            <Body />
       
          <Footer />
      </BackgroundLayer>
    );
  }
}

export default App;
