import { Fragment, useState, Component } from 'react'
import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000";

class OrderList extends Component {
  
    state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/api/orders`)
      .then(res => {
        const orders = res.data;
        this.setState({ orders });
      })
  }

  render() {
    return (
      
<>
      <h2>Order Management</h2>

<table class="table table-hover table-condensed">
<tr>
	<th>Customer ID</th>
    <th>Order Date</th>
    <th>Total Amount</th>
    <th>&nbsp;</th>
</tr>

  {
          this.state.orders
            .map(order =>
              <tr>
              <td key={order.id}>{order.custId}</td>
               <td key={order.id}>{order.orderDate}</td>
                <td key={order.id}>{order.totalAmount}</td>
                 <td key={order.id}>
                    <a href={"orders/details/" + order.id} class='btn btn-info btn-sm'><b>details</b></a>
                    <a href={"orders/edit/" + order.id} class='btn btn-info btn-sm'><b>edit</b></a> 
                  <a href={"orders/delete/" + order.id} class='btn btn-info btn-sm'><b>delete</b></a>
                  </td>
               </tr>
            )
        }


</table>


<a href="orders/create" class="btn btn-primary">Add Order</a>

</>


    )
  }
}


export default OrderList
