import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';


const BASE_URL = "http://127.0.0.1:8000";


class CustomerCreate extends Component {
    
state = {
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    address: ''
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
  
    axios.post(`${BASE_URL}/api/customers`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      contactNumber: this.state.contactNumber,
      address: this.state.address
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Customer has been added");
      })



  }

render() {
    return (
      <div>
         <br />
        <h2>Add Customer</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" onChange={this.handleChange} />
          </label><br/>
           <label>
            Last Name:
            <input type="text" name="lastName" onChange={this.handleChange1} />
          </label><br/>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange2} />
          </label><br/>
          <label>
            Contact Number:
            <input type="number" name="contactNumber" onChange={this.handleChange3} />
          </label><br/>
          <label>
            Address:
            <input type="text" name="address" onChange={this.handleChange4} />
          </label><br /><br />
          <button class="btn btn-success" type="submit">Add</button>&nbsp;&nbsp;
          <a href="/customers" class='btn btn-info'><b>Back To Customers</b></a>
        </form>
      </div>
    )
  }

}


export default CustomerCreate