import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import React from 'react';


const BASE_URL = "http://127.0.0.1:8000";


class ProductEdit extends React.Component {
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
    name: '',
    description: '',
    quantity: '',
    image: '',
    price: ''
  }

 componentDidMount() {
     const pathName = window.location.pathname;
const queryString = pathName.split("/");
const param = queryString[3];


    axios.get(`${BASE_URL}/api/products/${param}`)
      .then(res => {
        const product = res.data;
        console.log(product[0]);
        this.setState({
            name: product[0].name,
            description: product[0].description,
            quantity: product[0].quantity,
            image: product[0].image,
            price: product[0].price
        });
      })
      
  }
  
  handleChange = event => {
    console.log("handleChange");
    console.log(event.target.value);
    this.setState({ 
        name: event.target.value,
       
    });
  }

  handleChange1 = event => {
    console.log("handleChange1");
    console.log(event.target.value);
    this.setState({ 
        description: event.target.value,
       
    });
  }
  
  handleChange2 = event => {
    console.log("handleChange2");
    console.log(event.target.value);
    this.setState({ 
        quantity: event.target.value,
       
    });
  }

    handleChange3 = event => {
    console.log("handleChange3");
    console.log(event.target.value);
    this.setState({ 
        price: event.target.value,
       
    });
  }

  handleChange4 = event => {
    console.log("handleChange4");
    console.log(event.target.value);
    this.setState({ 
        image: event.target.value,
       
    });
  }
  


  handleSubmit = async (event)=> {
  event.preventDefault();

   const pathName = window.location.pathname;
const queryString = pathName.split("/");
const param = queryString[3];
  
    axios.put(`${BASE_URL}/api/products/${param}`, {
      name: this.state.name,
      description: this.state.description,
      quantity: this.state.quantity,
      image: this.state.image,
      price: this.state.price
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Product has been updated");
      })

  }

render() {
   
    return (
      <div>
        <br />
        <h2>Edit Product</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Product Name:
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          </label><br/>
           <label>
            Description:
            <input type="text" value={this.state.description} name="description" onChange={this.handleChange1} />
          </label><br/>
          <label>
            Quantity:
            <input type="number" value={this.state.quantity} name="quantity" onChange={this.handleChange2} />
          </label><br/>
          <label>
            Price:
            <input type="number" value={this.state.price} name="price" onChange={this.handleChange3} />
          </label><br/>
          <label>
            Image:
            <input type="text" value={this.state.image} name="image" onChange={this.handleChange4} />
          </label><br />
          <button className="btn btn-success" type="submit">Update</button>
          <a href="/products" className='btn btn-info'><b>Back To Products</b></a>
        </form>
      </div>
    )
  }

}


export default ProductEdit