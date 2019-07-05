import React, { Component } from 'react'
import axios from 'axios'
import "./PatientList.css"
import Modal from "./Modal"

export default class PatientList extends Component {

    state = {
        patients : [],
        show: false,
        id: 0
    }

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    componentDidMount() {
        this.getPatientList();
    }

    getPatientList = () => {
        axios.get('http://localhost:8080/api/customers').then( res => {
            console.log(res);
            this.setState({patients: res.data});
        })
    }

    onAdd = (id) => {
        this.setState({show: true})
        this.setState({id: id})
    }

    render() {
        return (
            <div>
                <Modal id={this.state.id} show={this.state.show} handleClose={this.hideModal}/>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Wallet Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.patients.map((person, i) => <TableRow onAdd={this.onAdd}  key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends Component {

    onClickAdd() {
        if(this.props.onAdd){
            this.props.onAdd(this.props.data.id);
        }
    }

    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
             <td>{this.props.data.wallet_amt} 
             <button type="button" id={this.props.data.id} className="button" onClick= {this.onClickAdd.bind(this)} >UPDATE</button> </td>
          </tr>
       );
    }
}
