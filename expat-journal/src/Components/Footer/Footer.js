import React, { Component } from "react";
import styled from "styled-components";

// const StyledLink = styled(Link)`
  
// `;

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0,0,0, .5);
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
  margin-top: 4%;
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <h2>This is the Footer!</h2>
      </Wrapper>
    );
  }
}

export default Footer;
