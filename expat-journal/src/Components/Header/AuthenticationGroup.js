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

    loginHandler = () => {
      console.log('Login Successful!')
      let user = {"username": this.state.username, "password": this.state.password}
      console.log(user)
      axios
        .post(`https://expat-lambda.herokuapp.com/api/login`, user)
        .then(response => {
          console.log("LOGIN RESPONSE", response.data)
          localStorage.setItem('token', (response.data.token));
        })
        .catch(err => console.error('login error:', err))
    }


    onChangeHandler = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    registerHandler = (e) => {
      console.log(this.state);
    };


    render() {

        return (
            <div>
                <InputField
                  name="username"
                  placeholder="Username"
                  type="text"
                  onChange={this.onChangeHandler}
                />
                <Button text="Login" onClick={this.loginHandler}/>
                {/*<Button text="Register" onClick={this.registerHandler}/>*/}
            </div>
        )
    }
};

export default AuthenticationGroup;