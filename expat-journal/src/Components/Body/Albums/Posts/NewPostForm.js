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
      // user_id: null,
      user_id: 5,
      title: "title",
      description: "text body"
    };
  }

  //Change Handler//

  inputChangeHandler = e => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNew = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const params =  {headers: {authorization: token}}
    console.log('token', token)
    const newPost = {
      user_id: this.state.user_id,
      // user_id:  this.props.user_id,
      title: this.state.title,
      description: this.state.description
    }
    axios
      .post(
        // `https://expat-lambda.herokuapp.com/api/posts`,
        `http://localhost/7777/api/posts`, params, newPost
      )
      .then(response => {
        console.log('response',response);
        // this.setState(previousState => ({...this.state [previousState.state, this.state]}))
        // this.props.addNew(response);
        this.props.addNew({...this.state [response.data.success]});
        this.props.history.push('/')
      })
      .catch(error => console.log("post error message", error));
    // this.setState({
    //   id: "",
    //   user_id: null,
    //   title: "",
    //   description: ""
    // });
  };

  render() {
    console.log('props...', this.props)
    return (
      <Wrapper>
        <div className="createContainer">
          <H2> Create New Post: </H2>{" "}
          <Form className="form" onSubmit={this.addNew}>
          <InputTitle
              className="id"
              type="textarea"
              name="id"
              placeholder="id"
              onChange={this.inputChangeHandler}
              value={this.state.user_id}
            />
            <InputTitle
              className="title"
              type="textarea"
              name="title"
              placeholder="Post Title"
              onChange={this.inputChangeHandler}
              value={this.state.title}
            />
            <InputBody
              className="description"
              type="textarea"
              name="description"
              placeholder="Post Content"
              onChange={this.inputChangeHandler}
              value={this.state.description}
            />{" "}
            <Button type="submit"> Save </Button>{" "}
          </Form>{" "}
        </div>
      </Wrapper>
    );
  }
}

export default NewPost;
