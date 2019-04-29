import React, { Component } from "react";
import InputField from "./Input";
import Button from "../Button";



class SignUp extends Component {
    state = {
        username: "",
        password: "",
        token: ""
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

export default SignUp;