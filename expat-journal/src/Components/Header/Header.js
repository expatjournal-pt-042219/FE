import React, { Component } from "react";
import styled from "styled-components";

const Banner = styled.h1`
  margin: 0;
`;

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0,0,0, .5);
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
`;


class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Banner>Ex.com</Banner>
      </Wrapper>
    );
  }
}

export default Header;
