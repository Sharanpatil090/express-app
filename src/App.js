import React, { Component } from 'react'
import './App.css';

// import Header from './compoents/Header'
// import Footer from "./compoents/Footer"
// import Body from "./compoents/Body"
import PatientList from "./compoents/PatientList"
import PatientInput from "./compoents/PatientInput"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Add Patient Here</h2>
        <PatientInput />
        <h2>Patients Details</h2>
        <PatientList />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
