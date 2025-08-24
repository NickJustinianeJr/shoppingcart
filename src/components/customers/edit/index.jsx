import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import React from 'react';


const BASE_URL = "http://127.0.0.1:8000";


class CustomerEdit extends React.Component {
   /* constructor(props) {
        super(props);
        console.log(props);
    }*/
  /*  constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
    }*/
    
state = {
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    address: ''
  }

 componentDidMount() {
     const pathName = window.location.pathname;
const queryString = pathName.split("/");
const param = queryString[3];


    axios.get(`${BASE_URL}/api/customers/${param}`)
      .then(res => {
        const customer = res.data;
        console.log(customer[0]);
        this.setState({
            firstName: customer[0].firstName,
            lastName: customer[0].lastName,
            email: customer[0].email,
            contactNumber: customer[0].contactNumber,
            address: customer[0].address
        });
      })
      
  }
  
  handleChange = event => {
    console.log("handleChange");
    console.log(event.target.value);
    this.setState({ 
        firstName: event.target.value,
       
    });
  }

  handleChange1 = event => {
    console.log("handleChange1");
    console.log(event.target.value);
    this.setState({ 
        lastName: event.target.value,
       
    });
  }
  
  handleChange2 = event => {
    console.log("handleChange2");
    console.log(event.target.value);
    this.setState({ 
        email: event.target.value,
       
    });
  }

    handleChange3 = event => {
    console.log("handleChange3");
    console.log(event.target.value);
    this.setState({ 
        contactNumber: event.target.value,
       
    });
  }

  handleChange4 = event => {
    console.log("handleChange4");
    console.log(event.target.value);
    this.setState({ 
        address: event.target.value,
       
    });
  }
  


  handleSubmit = async (event)=> {
  event.preventDefault();

   const pathName = window.location.pathname;
const queryString = pathName.split("/");
const param = queryString[3];
  
    axios.put(`${BASE_URL}/api/customers/${param}`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      contactNumber: this.state.contactNumber,
      address: this.state.address
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Customer has been updated");
      })

  }

render() {
   
    return (
      <div>
        <br />
        <h2>Edit Customer</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
          </label><br/>
           <label>
            Last Name:
            <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange1} />
          </label><br/>
          <label>
            Email:
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange2} />
          </label><br/>
          <label>
            Contact Number:
            <input type="number" value={this.state.contactNumber} name="contactNumber" onChange={this.handleChange3} />
          </label><br/>
          <label>
            Address:
            <input type="text" value={this.state.address} name="address" onChange={this.handleChange4} />
          </label><br /><br />
          <button className="btn btn-success" type="submit">Update</button>&nbsp;&nbsp;
          <a href="/customers" className='btn btn-info'><b>Back To Customers</b></a>
        </form>
      </div>
    )
  }

}


export default CustomerEdit