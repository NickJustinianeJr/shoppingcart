import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import "../../ui/cart.css"


const BASE_URL = "http://127.0.0.1:8000";

class ShoppingCart extends Component {
    constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
          }
  
    state = {
    products: []
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/api/products`)
      .then(res => {
        const products = res.data;
        console.log(products);
        this.setState({ products });
      })
  }

handleChange = event => {
    console.log("handleChange");
    console.log(event.target.value);
   /* this.setState({ 
        image: event.target.value,
       
    });*/
  }

  handleClick() {
alert("not yet finish!");
  }

  render() {
    return (
      
<>
      <h2>Shopping Cart</h2>
<br />
<div class="row">
{
          this.state.products
            .map(product =>
                
  <div class="column">
    <img src={"../images/" + product.image} height={150} width={150} />
    <p><b>{product.name}</b></p>
     <p>{product.price}</p>
     <p><input type="number" name="name" onChange={this.handleChange} width={70} /></p>
     <p><button class="btn btn-success" onClick={this.handleClick}>Add to Cart</button></p>
  </div>
  
            )
        }
</div>


</>


    )
  }
}


export default ShoppingCart
