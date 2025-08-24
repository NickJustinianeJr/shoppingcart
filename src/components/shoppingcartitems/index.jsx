import { Fragment, useState, Component } from 'react'
import axios from 'axios';
import "../../ui/cart.css"


const BASE_URL = "http://127.0.0.1:8000";

class ShoppingCartItems extends Component {
    constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
          }
  
    state = {
    cartItems: []
  }

  componentDidMount() {
   
    const userName = sessionStorage.getItem('userName');
    console.log(userName);
     axios.get(`${BASE_URL}/api/cartitems/username/${userName}`)
          .then(res => {
            const cartItems = res.data;
            console.log(cartItems);
            
            this.setState({ cartItems: cartItems });
          })
          
                
  }


  handleClick() {
alert("not yet finish!");
  }

  render() {
    return (
      
<>
      <h2>Shopping Cart Details</h2>

<table class="table table-hover table-condensed">
<tr>
	<th>Product Name</th>
    <th>Quantity</th>
    <th>Price Details</th>
    <th>Total Price</th>
    <th>Remove item</th>
</tr>

  {
          this.state.cartItems
            .map(cartitem =>
            
              <tr>
              <td key={cartitem.id}>
               {cartitem.prodId}</td>
                <td key={cartitem.id}>{cartitem.quantity}</td>
                 <td key={cartitem.id}>{cartitem.price}</td>
                  <td key={cartitem.id}>{cartitem.image}</td>
                  <td key={cartitem.id}>
                   <button class="btn btn-danger" onClick={this.handleClick}>Remove Item</button>
                   </td>
               </tr>
            )
        }


</table>


</>


    )
  }
}


export default ShoppingCartItems
