import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';


const BASE_URL = "http://127.0.0.1:8000";


class CustomerDetails extends Component {
    
  
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

render() {
    return (
      <div>
         <br />
        <h2>Customer Details</h2>
        <br />
        <label>
            First Name:&nbsp;&nbsp;
              </label>
              <b>{this.state.firstName}</b>
              <br/>
           <label>
            Last Name:&nbsp;&nbsp;
            </label>
            <b>{this.state.lastName}</b>
            <br/>
          <label>
            Email:&nbsp;&nbsp;
            </label>
            <b>{this.state.email}</b>
            <br/>
          <label>
            Contact Number:&nbsp;&nbsp;
             </label>
             <b>{this.state.contactNumber}</b>
             <br/>
          <label>
            Address:&nbsp;&nbsp;
             </label>
             <b>{this.state.address}</b>
             <br />
              <br />
          <a href="/customers" class='btn btn-info'><b>Back To Customers</b></a>
       
      </div>
    )
  }

}


export default CustomerDetails