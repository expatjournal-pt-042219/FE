import React, { Component } from "react";
// import styled from "styled-components";

import "./Authentication.css";
import InputField from "./Input";
import Button from "../Button";

import axios from 'axios';

class AuthenticationGroup extends React.Component {

    constructor() {
      super();
      this.state = {
        username: "",
        password: "",
        token: ""
      };
    }


    componentDidMount(){
      axios
        .get('http://localhost:7777/api/login')
        .then(response => {
          console.log("put response", response.data)
          this.setState({friends: response.data})
        })
        .catch(err => console.error("you got an error:", err));
    }

    AddLogin = id => {
      console.log('Login Successful!')
      axios
        .post(`http://localhost:7777/api/login/${id}`)
        .then(response => {
          console.log("LOGIN RESPONSE", response.data)
          this.setState({ login: response.data})
        })
        .catch(err => console.error('login error:', err))
    }

    AddLogin = e => {
        this.setState({
          loginInfo: {
            ...this.state.AddLogin,
            [e.target.name]: e.target.value
          }
       })
    }


    onChangeHandler = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

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
                <InputField
                  name="username"
                  value={username}
                  placeholder="Username"
                  type="text"
                  onChange={this.onChangeHandler}
                />
                <InputField
                  name="password"
                  value={password}
                  placeholder="Password"
                  type="password"
                  onChange={this.onChangeHandler}
                />
                <Button text="Login" onClick={this.loginHandler}/>
                <Button text="Register" onClick={this.registerHandler}/>
            </div>
        )
    }
};

export default AuthenticationGroup;