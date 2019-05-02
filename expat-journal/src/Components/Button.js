import React, {Component} from "react";

// Text
// onClick

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}

export default Button;