//Main Imports
import React from "react";
import "./LoginForm.css";
//Icons (react-icons.github.io)
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
          <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox"/>Remember me </label>
          <button type="button" className="link-button">
              Forgot Password?
          </button>
        </div>
        <button type="submit" className="login">
          Login
        </button>
        <div className="register">
            <p> Don't have an account?&nbsp; 
               <button type="button" className="link-button">
               Register
          </button></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm