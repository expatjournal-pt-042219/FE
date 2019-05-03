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

  //
  // const token= localStorage.getItem('jwt');
  // const reqOptions = {
  //   headers:{
  //     Authorization:token
  //   }
  // }

    loginHandler = (e) => {
      e.preventDefault()
      console.log('Login Successful!')
      let user = {username: this.state.username, password: this.state.password}
      console.log(user)
      axios
        .post(`https://expat-lambda.herokuapp.com/api/login`, user)
        .then(response => {
          console.log("LOGIN RESPONSE", response.data)
          localStorage.setItem('token', (response.data.token));
          console.log(this.props)
        })
        .catch(err => console.error('login error:', err))
    }


    onChangeHandler = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }


    render() {

        return (
            <div>
                <form onSubmit={this.loginHandler}>
                <InputField
                  name="username"
                  placeholder="Username"
                  type="text"
                  onChange={this.onChangeHandler}
                />
                  <InputField
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={this.onChangeHandler}
                  />
                <Button type={"submit"} text="Login"/>
                </form>
            </div>
        )
    }
};

export default AuthenticationGroup;