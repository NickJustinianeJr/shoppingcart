import React, { useState } from 'react';
import '../../ui/login.css';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';

const BASE_URL = "http://127.0.0.1:8000";

function setToken(userToken, userName) {
    sessionStorage.setItem('userToken', userToken);
    sessionStorage.setItem('userName', userName);
}

async function loginUser(userName, password) {
    
const token = "";
    axios.post(`${BASE_URL}/api/users/loginuser`, {
         userName: userName,
         password: password
       })
         .then(res => {
           console.log(res);
           console.log(res.data);

           const userToken = res.data;
           
           if (userToken != "")
           {
            //sessionStorage.setItem('userToken', res.data);
            setToken(userToken, userName);
            window.location.href = window.location.origin;
            }
         })
         

}


export default function Login() {

    const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser(username, password);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <br />
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <br /><br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}