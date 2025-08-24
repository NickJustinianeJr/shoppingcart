import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';


const BASE_URL = "http://127.0.0.1:8000";


class ProductCreate extends Component {
    
state = {
    name: '',
    description: '',
    quantity: '',
    image: '',
    price: ''
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
  
    axios.post(`${BASE_URL}/api/products`, {
      name: this.state.name,
      description: this.state.description,
      quantity: this.state.quantity,
      image: this.state.image,
      price: this.state.price
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Product has been added");
      })



  }

render() {
    return (
      <div>
         <br />
        <h2>Add Product</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Product Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label><br/>
           <label>
            Description:
            <input type="text" name="description" onChange={this.handleChange1} />
          </label><br/>
          <label>
            Quantity:
            <input type="number" name="quantity" onChange={this.handleChange2} />
          </label><br/>
          <label>
            Price:
            <input type="number" name="price" onChange={this.handleChange3} />
          </label><br/>
          <label>
            Image:
            <input type="text" name="image" onChange={this.handleChange4} />
          </label><br />
          <button class="btn btn-success" type="submit">Add</button>
          <a href="/products" class='btn btn-info'><b>Back To Products</b></a>
        </form>
      </div>
    )
  }

}


export default ProductCreate