import React, { Component } from 'react'

class Button extends Component {

    constructor(){
        super();
        this.state = {
            color : "red"
        }
        this.method = this.method.bind(this);
    }



    method(){
        console.log("hello sharan");
        this.setState({color: "yellow"});
    }

    render() {
      return (
        <button type="button" onClick = {this.method} >{this.props.value}</button>        
      ); 
    }
}

export default Button;