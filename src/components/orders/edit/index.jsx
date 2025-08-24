import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import React from 'react';


const BASE_URL = "http://127.0.0.1:8000";


class OrderEdit extends React.Component {
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

   const pathName = window.location.pathname;
const queryString = pathName.split("/");
const param = queryString[3];
  
    axios.put(`${BASE_URL}/api/orders/${param}`, {
      custId: this.state.custId,
      orderDate: this.state.orderDate,
      totalAmount: this.state.totalAmount
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Order has been updated");
      })

  }

render() {
   
    return (
      <div>
        <br />
        <h2>Edit Order</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Customer ID:
            <input type="text" value={this.state.custId} name="custId" onChange={this.handleChange} />
          </label><br/>
           <label>
            Order Date:
            <input type="date" value={this.state.orderDate} name="orderDate" onChange={this.handleChange1} />
          </label><br/>
          <label>
            Total Amount:
            <input type="number" value={this.state.totalAmount} name="totalAmount" onChange={this.handleChange2} />
          </label><br/>
          <br />
          <button className="btn btn-success" type="submit">Update</button>
          <a href="/orders" className='btn btn-info'><b>Back To Orders</b></a>
        </form>
      </div>
    )
  }

}


export default OrderEdit