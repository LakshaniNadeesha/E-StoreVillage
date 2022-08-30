import React from "react";
import "./LoginPage.css";
import { IoCheckbox } from "react-icons/io5";
import {ImCheckboxUnchecked} from "react-icons/im"
import Facebook from "../../../assests/images/auth/Facebook.png";
import Google from "../../../assests/images/auth/Google.png";
import LinkedIn from "../../../assests/images/auth/LinkedIn.png";
import Welcome from "../../../assests/images/auth/welcome.png";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  function myFunction() {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const navigate = useNavigate();
  return (
    <div className="login-page-main-container">
      <div className="login-container">
        <div className="login-container-header">
          <p>Login to Your Account</p>
          <h3 className="sub-title-login">
            E-Store Village can make your life simpler.
          </h3>
        </div>
        <div style={{ width: "100%", marginTop: 50 }}>
          <div className="auth-input-container">
            <span className="auth-input-label">Email</span>
            <input className="auth-input" placeholder="youremail@gmail.com" required/>
          </div>

          <div style={{ marginTop: 40, width: "100%" }}>
            <div className="auth-input-container">
              <span className="auth-input-label">Password</span>
              <input className="auth-input" id="myInput" type="password" placeholder="*****" required/>
            </div>
          </div>

          <div className="remember-me-container">
            <span>
              <input type="checkbox" onClick={myFunction} />
              Remember Me
            </span>
            <p>Forgot Password</p>
          </div>

          <button className="login-btn" onClick={() => navigate("/myshop")}>
            Login
          </button>

          <div className="crate-account-login">
            <span>Not registered yet?</span>
            <p onClick={() => navigate("/createAccount")}>Create an account</p>
          </div>

          <div className="social-media-container-login">
            <img src={Facebook} />
            <img src={Google} />
            <img src={LinkedIn} />
          </div>
        </div>
      </div>

      {/* <div style={{ backgroundColor: "white" }}>
        <img src={Welcome} className="welcome-png" />
      </div> */}
    </div>
  );
};

export default LoginPage;
