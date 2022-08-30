import React from "react";
import "./Customer.css";
import CustomerLogo from "../../../../assests/images/auth/customersignup.png";
import Facebook from "../../../../assests/images/auth/Facebook.png";
import Google from "../../../../assests/images/auth/Google.png";
import LinkedIn from "../../../../assests/images/auth/LinkedIn.png";
import { Link, useNavigate } from "react-router-dom";

const Customer = (props) => {
  document.body.style.backgroundColor = "white";
  const navigate = useNavigate();

  return (
    <div className="customer-create-account-main">
      <div className="customer-crate-section">
        <div className="customer-img-container">
          <img src={CustomerLogo} />
        </div>
        <div className="customer-input-container">
          <div className="tab-bar-create-account">
            <button onClick={() => props.onCustomer()}>Customer</button>
            <button onClick={() => props.onSeller()}>Seller</button>
          </div>
          <div style={{ width: "80%" }}>
            <p className="create-account-login">CREATE ACCOUNT </p>
            <div className="auth-input-container m-top">
              <input className="auth-input" placeholder="First  Name" />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" placeholder="Last Name" />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" placeholder="E-mail" />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" placeholder="Address" />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" placeholder="Contact No" />
            </div>
            <div className="auth-input-container m-top">
              <input type="password" className="auth-input" placeholder="Password" />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" type="password" placeholder="Confirm Password" />
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <button className="create-account-yellow-btn"
                    onClick={() => navigate("/login")}>

              Create Account
            </button>
            <div
              className="regiseter-to-login"
              style={{ marginTop: 40 }}
              onClick={() => navigate("/login")}>
              <span>Already registerd?</span>
              <p>Login</p>
            </div>

            <p className="or-login">OR</p>

            <div className="social-media-container-login">
              <img src={Facebook} />
              <img src={Google} />
              <img src={LinkedIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
