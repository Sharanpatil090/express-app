import React, { Component } from 'react'
import axios from 'axios'
// import "./PatientInput.css"
import "./Modal.css"

export default class Modal extends Component {

    state = {
        wallet_amt: 0
    }

    handleChange = e => {
        if (e.target.id === 'amt') {
            this.setState({ wallet_amt: e.target.value});
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.props);

        axios.put("http://localhost:8080/api/customers/" + this.props.id, {
            "wallet_amt": this.state.wallet_amt
        }).then(res => {
            console.log(res);
            console.log(res.data);
            alert('Amount Submission Successful');
        })
    }

    closeFun() {
        this.props.handleClose();
    }

    render() {
        return (
            <div className={this.props.show ? "modal display-block" : "modal display-none"}>
                <h2>Update Wallet Amount</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>Patient Wallet Amount: </label>
                        <input type = "number" name = "wallet_amt" id="amt" onChange = {this.handleChange} />
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
                <button type="button" onClick = {this.closeFun.bind(this)}>Close</button>
            </div>
        );
    }
}
