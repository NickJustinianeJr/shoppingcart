import { Fragment, useState, Component } from 'react'
import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000";

class ProductList extends Component {
  
    state = {
    products: []
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/api/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      
<>
      <h2>Product Management</h2>

<table class="table table-hover table-condensed">
<tr>
	<th>Product Name</th>
    <th>Description</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Image</th>
    <th>&nbsp;</th>
</tr>

  {
          this.state.products
            .map(product =>
              <tr>
              <td key={product.id}>{product.name}</td>
               <td key={product.id}>{product.description}</td>
                <td key={product.id}>{product.quantity}</td>
                 <td key={product.id}>{product.price}</td>
                  <td key={product.id}>{product.image}</td>
                  <td key={product.id}>
                    <a href={"products/details/" + product.id} class='btn btn-info btn-sm'><b>details</b></a>
                    <a href={"products/edit/" + product.id} class='btn btn-info btn-sm'><b>edit</b></a> 
                  <a href={"products/delete/" + product.id} class='btn btn-info btn-sm'><b>delete</b></a>
                  </td>
               </tr>
            )
        }


</table>


<a href="products/create" class="btn btn-primary">Add Products</a>

</>


    )
  }
}


export default ProductList
