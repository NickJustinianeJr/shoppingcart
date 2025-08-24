import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';


const BASE_URL = "http://127.0.0.1:8000";


class OrderDelete extends Component {
    constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
          }
  
state = {
    custId: '',
    orderDate: '',
    totalAmount: ''
  }

 componentDidMount() {
     const pathName = window.location.pathname;
const queryString = pathName.split("/");
const param = queryString[3];


    axios.get(`${BASE_URL}/api/orders/${param}`)
      .then(res => {
        const order = res.data;
        console.log(order[0]);
        this.setState({
            custId: order[0].custId,
            orderDate: order[0].orderDate,
            totalAmount: order[0].totalAmount
        });
      })
      
  }

  handleClick() {
    
     const pathName = window.location.pathname;
const queryString = pathName.split("/");
const param = queryString[3];


    axios.delete(`${BASE_URL}/api/orders/${param}`)
      .then(res => {
        console.log(res.data);
        alert("Order has been deleted");
        window.location.href = window.location.origin + "/orders";
      })


  }

render() {
    return (
      <div>
         <br />
        <h2>Order Delete</h2>
        <br />
        <label>
            Customer ID:&nbsp;&nbsp;
              </label>
              <b>{this.state.custId}</b>
              <br/>
           <label>
            Order Date:&nbsp;&nbsp;
            </label>
            <b>{this.state.orderDate}</b>
            <br/>
          <label>
            Total Amount:&nbsp;&nbsp;
            </label>
            <b>{this.state.totalAmount}</b>
            <br/>
         
              <br />
              <button class="btn btn-danger" onClick={this.handleClick}>Delete</button>&nbsp;&nbsp;
          <a href="/orders" class='btn btn-info'><b>Back To Orders</b></a>
       
      </div>
    )
  }

}


export default OrderDelete