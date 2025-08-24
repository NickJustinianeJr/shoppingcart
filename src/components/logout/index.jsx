import React, { useState } from 'react';
import '../../ui/login.css';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';


function removeToken() {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userName');
}

export default function Logout() {
    
    const handleClick = async e => {
    removeToken();
    window.location.href = window.location.origin;
    }

   const userToken = sessionStorage.getItem('userName');

  return(
    <div class="logout-wrapper">
   <ul class='nav navbar-nav navbar-right'>
    <li><b>Welcome {userToken}</b></li>
    <li><a href="javascript:(0);" onClick={handleClick}><b>Logout</b></a></li>
    </ul>
</div>
  )
}