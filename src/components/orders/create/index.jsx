import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';


const BASE_URL = "http://127.0.0.1:8000";


class OrderCreate extends Component {
    
state = {
    custId: '',
    orderDate: '',
    totalAmount: ''
  }

  handleChange = event => {
    console.log("handleChange");
    console.log(event.target.value);
    this.setState({ 
        custId: event.target.value,
       
    });
  }

  handleChange1 = event => {
    console.log("handleChange1");
    console.log(event.target.value);
    this.setState({ 
        orderDate: event.target.value,
       
    });
  }
  
  handleChange2 = event => {
    console.log("handleChange2");
    console.log(event.target.value);
    this.setState({ 
        totalAmount: event.target.value,
       
    });
  }

  
  handleSubmit = async (event)=> {
  event.preventDefault();
  
    axios.post(`${BASE_URL}/api/orders`, {
      custId: this.state.custId,
      orderDate: this.state.orderDate,
      totalAmount: this.state.totalAmount
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Order has been added");
      })



  }

render() {
    return (
      <div>
         <br />
        <h2>Add Order</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Customer ID:
            <input type="text" name="custId" onChange={this.handleChange} />
          </label><br/>
           <label>
            Order Date:
            <input type="date" name="orderDate" onChange={this.handleChange1} />
          </label><br/>
          <label>
            Total Amount:
            <input type="number" name="totalAmount" onChange={this.handleChange2} />
          </label><br/>
          
          <br />
          <button class="btn btn-success" type="submit">Add</button>&nbsp;&nbsp;
          <a href="/orders" class='btn btn-info'><b>Back To Orders</b></a>
        </form>
      </div>
    )
  }

}


export default OrderCreate