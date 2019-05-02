import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";
import axios from "axios";
import NewPost from "./NewPostForm";
//Styling//

const Title = styled.h3`
  overflow-wrap: break-word;
`;

const Body = styled.div`
  overflow-wrap: break-word;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
const Header = styled.h2`
  width: 100%;
  padding-left: 5%;
  padding-top: 5%;
`;

const StyledLink = styled(Link)`
  border: 2px solid black
  width: 23%;
  margin: 2%;
  background-color:white;
  height: 150px;
  padding: 2%;
  color:black;
  text-decoration: none;
`;

//Component//

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }

  //Get request to get posts for the list.//

    componentDidMount() {
      axios
        .get(`https://expat-lambda.herokuapp.com/api/user/posts/:id`)

        .then(response => {
          console.log(response);
          this.setState({
            posts: response.data,
            loading: false
          });
        })
        .catch(err => console.log(err));
    }

  render() {
    return (
      <StyledList>
        <Header>My Posts:</Header>
        {this.state.posts.map(post => {
          return (
            <StyledLink to={`Post/${post._id}`}>
              <Title>{post.title}</Title>
              <hr />
              <Body>{post.description.substr(0, 100)} </Body>
            </StyledLink>
          );
        })}
        <NewPost/>
      </StyledList>
    );
  }
}

export default Posts;
