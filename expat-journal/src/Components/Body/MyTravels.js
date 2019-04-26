import React, { Component } from "react";
import PostAlbum from "./Posts/PostAlbum";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import NewPost from "./Albums/Posts/NewPostForm";
import ViewPost from "./Albums/Posts/ViewPost";
import EditPost from "./Albums/Posts/EditPost";
// const StyledLink = styled(Link)`

// `;

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0,0,0, .5);
  width: 80%;
  padding-top: 4%;
  padding-bottom: 4%;
  margin: 4% auto;
`;

class MyTravels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  render() {
    return (
      <Wrapper>
          <Route
            path="/PostsList"
            exact
            render={props => <PostAlbum {...props} />}
          />
          <Route path="/NewPost" exact component={NewPost} />
          <Route
            exact
            path="/post/:id"
            render={props => <ViewPost {...props} />}
          />
          <Route path="/post/edit/:id" component={EditPost} />
      </Wrapper>
    );
  }
}

export default MyTravels;
