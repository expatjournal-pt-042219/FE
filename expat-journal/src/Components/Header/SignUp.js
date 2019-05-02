import React, { Component } from "react";
import InputField from "./Input";
import Button from "../Button";
import axios from 'axios';
import "./SignUp.css";


class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      token: ""
    };
  }



  registerHandler = id => {
    console.log('Sign Up Successful!')
    axios
      .post(`https://expat-lambda.herokuapp.com/api/registration${id}`)
      .then(response => {
        console.log("SIGNUP RESPONSE", response.data)
        localStorage.setItem('token', (response.data.token));
      })
      .catch(err => console.error("signup error:", err));
  }


  onChangeHandler = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };


  registerHandler = () => {
    console.log(this.state);
  };


  render() {
    return (
      <div>
        <InputField
          name="password"
          placeholder="Password"
          type="password"
          onChange={this.onChangeHandler}
        />
        <Button text="Register" onClick={this.registerHandler}/>
      </div>
    )
  }
};

export default SignUp;