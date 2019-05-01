import React, { Component } from "react";
import InputField from "./Input";
import Button from "../Button";
import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';



// const registerUser = ({user}) => {
// //   return postData(
// //     "http://localhost:7777/api/register",
// //     user
// //   )
// //     .then(res => res)
// //     .then(success => console.log(success))
// //     .catch(error => console.error(error));
// // };

export const loginUser = (user) => {
  return axios
    .post('http://localhost:7777/api/login', user)
    .then(response =>
      console.log(response)
    )
    .catch(error => console.error(error));
};




class SignUp extends Component {
    state = {
        username: "",
        password: "",
        token: ""
    }

  componentDidMount = () => {
    loginUser({username: 'Shayan', password:'avengers'});
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