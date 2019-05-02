import React, { Component } from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  padding-top: 4%;
  padding-bottom: 4%;
  margin: 4% auto;
`;

const Button = styled.button`
  color: white;
  text-decoration: none;
  background-color: rgb(20,15,14);
  margin: 10% auto;
  height: 30px;
  display: flex;
  justify-content: center;
  padding: 2%;
  width: 80%;
  font-weight: bold;
  padding-top: 10px;
`;

const H2 = styled.h2`
  margin: 5%;
`;

const InputTitle = styled.input`
  height: 5vh;
  width: 90%;
  margin: 5%;
`;

const InputBody = styled.input`
  width: 90%;
  height: 20vh;
  margin: 5%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  //Change Handler//

  inputChangeHandler = e => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNew = e => {
    e.preventDefault();
    axios
      .post(
        `https://expat-lambda.herokuapp.com/api/posts/post/create`,
        this.state
      )
      .then(response => {
        this.props.addNoteOnServer(response.data);
      })
      .catch(err => console.log("Error", err));
    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <Wrapper>
        <div className="createContainer">
          <H2> Create New Post: </H2>{" "}
          <Form className="form" onSubmit={this.addNew}>
            <InputTitle
              className="title"
              type="textarea"
              name="title"
              placeholder="Post Title"
              onChange={this.inputChangeHandler}
              value={this.state.title}
            />
            <InputBody
              className="textBody"
              type="textarea"
              name="textBody"
              placeholder="Post Content"
              onChange={this.inputChangeHandler}
              value={this.state.textBody}
            />{" "}
            <Button type="submit"> Save </Button>{" "}
          </Form>{" "}
        </div>
      </Wrapper>
    );
  }
}

export default NewPost;
