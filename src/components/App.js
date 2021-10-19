import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import  'react-bootstrap';

import {FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa';
import "./App.css";

function App() {

function signupfunc(e)
  {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  }

  function signinfunc(e)
  {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  }

return (
<div className="ab">
<div class="signimg">
<img class="dimg" src="https://www.logotaglines.com/wp-content/uploads/2016/08/td-amazon-smile-logo-01-large.jpg"/>
<h4 class="sh"><b>Welcome to <span class="sp"> Amazon</span></b></h4></div>
<div class="container" id="container">
  <div class="form-container sign-up-container">
    <form action="#">
      <h1>Create Account</h1>
      <div class="social-container">
        <a href="#" className="social"><i><FaLinkedin/></i></a>
              <a href="#" className="social"><i><FaGoogle/></i></a>
              <a href="#" className="social"><i><FaInstagram/></i></a>
      </div>
      <span class="signs">or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <select ><option class="so">Select Type</option>
      <option class="so">Employee</option>
      <option class="so">Company</option></select>
      <button>Sign Up</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <a href="#" className="social"><i><FaLinkedin/></i></a>
              <a href="#" className="social"><i><FaGoogle/></i></a>
              <a href="#" className="social"><i><FaInstagram/></i></a>
      </div>
      <span class="signs">or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <select ><option class="so">Select Type</option>
      <option class="so">Employee</option>
      <option class="so">Company</option></select>
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button class="ghost" id="signIn" style={{borderRadius:"30px"}} onClick={(e) => signinfunc(e)}>Sign In</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button class="ghost" id="signUp" style={{borderRadius:"30px"}} onClick={(e) => signupfunc(e)}>Sign Up</button>
      </div>
    </div>
  </div>
</div>


</div>
);
}

export default App;