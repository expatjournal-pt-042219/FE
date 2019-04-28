import React, { Component } from "react";

class InputField extends Component {
    render() {
        return (
            <input name={this.props.name} type={this.props.type} onChange={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder}/>
        )
    }
}

export default InputField;