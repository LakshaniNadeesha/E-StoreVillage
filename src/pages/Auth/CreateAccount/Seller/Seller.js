import React from "react";
import SellerLogo from "../../../../assests/images/auth/sellersignup.png";
import Facebook from "../../../../assests/images/auth/Facebook.png";
import Google from "../../../../assests/images/auth/Google.png";
import LinkedIn from "../../../../assests/images/auth/LinkedIn.png";
import { Link, useNavigate } from "react-router-dom";

const Seller = (props) => {
  const navigate = useNavigate();
  return (
    <div className="customer-create-account-main">
      <div
        className="customer-crate-section"
        style={{ flexDirection: "row-reverse" }}>
        <div
          className="customer-img-container"
          style={{ backgroundColor: "#DEE1EF", borderLeft: "1px solid" }}>
          <img src={SellerLogo} />

          <div style={{ marginTop: 40 }}>
            <button className="create-account-yellow-btn"
              onClick={() => navigate("/login")}>
              Create Account
            </button>
            <div
              onClick={() => navigate("/login")}
              className="regiseter-to-login"
              style={{ marginTop: 40 }}>
              <span>Already registered?</span>
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
        <div className="customer-input-container">
          <div className="tab-bar-create-account">
            <button onClick={() => props.onSeller()}>Seller</button>
            <button onClick={() => props.onCustomer()}>Customer</button>
          </div>
          <div style={{ width: "80%" }}>
            <p className="create-account-login">CREATE ACCOUNT </p>
            <div className="auth-input-container m-top">
              <input className="auth-input" placeholder="Shop name" />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" placeholder="E-mail" />
            </div>
            <div className="auth-input-container m-top">
              <input
                className="auth-input"
                placeholder="No of Followers/ Friends"
              />
            </div>

            <div className="auth-input-container m-top">
              <input
                className="auth-input"
                placeholder="Link to the Social Media Account"
              />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" placeholder="Contact No" />
            </div>
            <div className="auth-input-container m-top">
              <textarea
                rows={5}
                placeholder="Add Bio..."
                className="auth-input"
              />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" type="password" placeholder="Password" />
            </div>
            <div className="auth-input-container m-top">
              <input className="auth-input" type="password" placeholder="Confirm Password" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
