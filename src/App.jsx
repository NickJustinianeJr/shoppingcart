import { Fragment, useState } from 'react'
//import './bootstrap.css';
import './App.css'
import Home from './pages/home'
import ProductList from './components/products/list'
import ProductCreate from './components/products/create'
import ProductEdit from './components/products/edit'
import ProductDetails from './components/products/details'
import ProductDelete from './components/products/delete'
import CustomerList from './components/customers/list'
import CustomerDetails from './components/customers/details'
import CustomerDelete from './components/customers/delete'
import CustomerCreate from './components/customers/create'
import CustomerEdit from './components/customers/edit'
import OrderList from './components/orders/list'
import OrderDetails from './components/orders/details'
import OrderDelete from './components/orders/delete'
import OrderCreate from './components/orders/create'
import OrderEdit from './components/orders/edit'

import Login from './components/login';
import Logout from './components/logout';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  const userToken = sessionStorage.getItem('userToken');
 console.log(userToken);

  if(!userToken) {
    return <Login />
  }

  return (
    <>
    

<BrowserRouter>
<nav>
   <Link to="/">Shopping Cart</Link> |{" "}
   <Link to="/products">Products</Link> |{" "}
        <Link to="/customers">Customers</Link> |{" "}
        <Link to="/orders">Orders</Link>

          <Logout />
      </nav>
    
<br /><br />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/products" element={<ProductList />} />
         <Route path="/products/create" element={<ProductCreate />} />
         <Route path="/products/edit/:id" element={<ProductEdit />} />
         <Route path="/products/details/:id" element={<ProductDetails />} />
         <Route path="/products/delete/:id" element={<ProductDelete />} />

         <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/details/:id" element={<CustomerDetails />} />
          <Route path="/customers/delete/:id" element={<CustomerDelete />} />
           <Route path="/customers/create" element={<CustomerCreate />} />
            <Route path="/customers/edit/:id" element={<CustomerEdit />} />

         <Route path="/orders" element={<OrderList />} />
            <Route path="/orders/details/:id" element={<OrderDetails />} />
            <Route path="/orders/delete/:id" element={<OrderDelete />} />
              <Route path="/orders/create" element={<OrderCreate />} />
              <Route path="/orders/edit/:id" element={<OrderEdit />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
