import React, { Component } from "react";
import InputField from "./Input";
import Button from "../Button";
import axios from 'axios';

// export const LOGIN_USER = 'LOGIN_USER';
// export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
// export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';



class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      token: ""
    };
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:7777/api/register')
      .then(response => {
        console.log("put response", response.data)
      })
      .catch(err => console.error("you got an error:", err));
  }

  AddSignUp = id => {
    console.log('Sign Up Successful!')
    axios
      .post(`http:localhost:7777/api/register${id}`)
      .then(response => {
        console.log("SIGNUP RESPONSE", response.data)
        this.setState({ signup: response.data})
      })
      .catch(err => console.error("signup error:", err));
  }

  AddSignUp = e => {
    this.setState({
      signupInfo: {
        ...this.state.AddSignUp,
        [e.target.name]: e.target.value
      }
    })
  }

  onChangeHandler = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  loginHandler = () => {
    localStorage.setItem('token', JSON.stringify(this.matchCredentials(this.state.username, this.state.password)));
  };

  matchCredentials = (username, password) => {
    const usernameToMatch = "123@gmail.com";
    const passwordToMatch = "123123";
    const token = "18238127371823172";

    const isValid = (username === usernameToMatch.toLowerCase() && password === passwordToMatch.toLowerCase());

    if (isValid) {
      return token;
    } else {
      return "Error";
    }
  };

  registerHandler = () => {
    console.log(this.state);
  };


  render() {
    const {username, password} = this.state;
    return (
      <div>
        <Button text="Register" onClick={this.registerHandler}/>
      </div>
    )
  }
};

export default SignUp;