import { Fragment, useState, Component } from 'react'
import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000";

class CustomerList extends Component {
  
    state = {
    customers: []
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/api/customers`)
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      })
  }

  render() {
    return (
      
<>
      <h2>Customer Management</h2>

<table class="table table-hover table-condensed">
<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Contact Number</th>
    <th>Address</th>
    <th>&nbsp;</th>
</tr>

  {
          this.state.customers
            .map(customer =>
              <tr>
              <td key={customer.id}>{customer.firstName}</td>
               <td key={customer.id}>{customer.lastName}</td>
                <td key={customer.id}>{customer.email}</td>
                 <td key={customer.id}>{customer.contactNumber}</td>
                  <td key={customer.id}>{customer.address}</td>
                  <td key={customer.id}>
                    <a href={"customers/details/" + customer.id} class='btn btn-info btn-sm'><b>details</b></a>
                    <a href={"customers/edit/" + customer.id} class='btn btn-info btn-sm'><b>edit</b></a> 
                  <a href={"customers/delete/" + customer.id} class='btn btn-info btn-sm'><b>delete</b></a>
                  </td>
               </tr>
            )
        }


</table>


<a href="customers/create" class="btn btn-primary">Add Customer</a>

</>


    )
  }
}


export default CustomerList
