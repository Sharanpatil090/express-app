import React, { Component } from 'react'
import axios from 'axios'
import "./PatientInput.css"

export default class PatientInput extends Component {

    state = {
        name : '',
        gender: '',
        age: 0,
        wallet_amt: 0,
    }

    handleChange = e => {
        if (e.target.id === 'name') {
            this.setState({ name: e.target.value });
        } else if (e.target.id === 'gender') {
            this.setState({ gender: e.target.value });
        } else if (e.target.id === 'age') {
            this.setState({ age: e.target.value });
        } else if (e.target.id === 'amt') {
            this.setState({ wallet_amt: e.target.value});
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post("http://localhost:8080/api/customers", {
            "name" : this.state.name,
            "gender": this.state.gender,
            "age": this.state.age,
            "wallet_amt": this.state.wallet_amt
        }).then(res => {
            console.log(res);
            console.log(res.data);
            alert('Form Submission Successful');
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name: </label>
                        <input type = "text" name = "name" id="name" onChange = {this.handleChange} required/>
                    <br/>
                    <label>Gender: </label>
                        <input type = "text" name = "gender" id="gender" onChange = {this.handleChange} required/>
                    <br/>
                    <label> Age: </label>
                        <input type = "number" name = "age" id="age" onChange = {this.handleChange} required/>
                    <br/>
                    <label>Wallet Amount: </label>
                        <input type = "number" name = "wallet_amt" id="amt" onChange = {this.handleChange} />
                    <br/>
                    {/* <button type = "submit">ADD</button> */}
                    <input type="submit" value="Submit"></input>

                </form>
            </div>
        );
    }
}
