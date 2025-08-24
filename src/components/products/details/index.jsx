import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';


const BASE_URL = "http://127.0.0.1:8000";


class ProductDetails extends Component {
    
  
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

render() {
    return (
      <div>
         <br />
        <h2>Product Details</h2>
        <br />
        <label>
            Product Name:&nbsp;&nbsp;
              </label>
              <b>{this.state.name}</b>
              <br/>
           <label>
            Description:&nbsp;&nbsp;
            </label>
            <b>{this.state.description}</b>
            <br/>
          <label>
            Quantity:&nbsp;&nbsp;
            </label>
            <b>{this.state.quantity}</b>
            <br/>
          <label>
            Price:&nbsp;&nbsp;
             </label>
             <b>{this.state.price}</b>
             <br/>
          <label>
            Image:&nbsp;&nbsp;
             </label>
             <b>{this.state.image}</b>
             <br />
              <br />
          <a href="/products" class='btn btn-info'><b>Back To Products</b></a>
       
      </div>
    )
  }

}


export default ProductDetails