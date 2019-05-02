import React, { Component } from "react";
import PostAlbum from "./Albums/Posts/PostAlbum";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import NewPost from "./Albums/Posts/NewPostForm";
import ViewPost from "./Albums/Posts/ViewPost";
import EditPost from "./Albums/Posts/EditPost";
import PhotoAlbum from "./Albums/Photos/PhotoAlbum";
// const StyledLink = styled(Link)`

// `;

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 80%;
  padding-top: 4%;
  padding-bottom: 4%;
  margin: 4% auto;
`;
const StyledLink = styled(Link)`
  color: white;
  margin: auto;
  padding:4%;
  text-decoration: none;
  &:hover {
    color: aqua;
    transition: 0.3s;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 1);
  }
`;
const AlbumWrapper = styled.div`
display: flex;
  }
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
        <Router>
        <AlbumWrapper>
        <StyledLink to="/PostsList">
        <h2>Posts</h2>
        <p>Insert featured post here!</p>
        </StyledLink>
        <StyledLink to="/photos">
        <h2>Photos</h2>
        <p>Insert featured photo here!</p>
        </StyledLink>
        </AlbumWrapper>
        <Route path="/PostsList" exact render={props => <PostAlbum {...props} />} />
        <Route path="/NewPost" exact component={NewPost} />
        <Route exact path="/post/:id" render={props => <ViewPost {...props} />} />
        <Route path="/post/edit/:id" component={EditPost} />
        <Route path="/photos" component={PhotoAlbum} />
        </Router>
      </Wrapper>
    );
  }
}

export default MyTravels;
