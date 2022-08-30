import React from "react";
import "./profilepage.css";
import Profile from "../../assests/images/profile-img.png";
import { Link, useNavigate } from "react-router-dom";


const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-main-container">
      <div className="profile-row-container">
        <div className="profile-img-container">
          <h3 className="profile-name">Sanduni Fernando</h3>
          <img src={Profile} alt="" className="profile-img" />
          <p className="profile-loyalty-score">Loyalty Points : 207</p>
        </div>

        <span className="profile-vr"></span>
        <div className="profile-detail-container">
          <span className="profile-detail-txt">Name - Sanduni Fernando</span>
          <span className="profile-detail-txt">
            E-mail - sandunifdo@gmail.com
          </span>
          <span className="profile-detail-txt">Adddress - No 256, Colombo</span>
          <span className="profile-detail-txt">Contact No - 071-XXXXXXXX</span>
          <button className="profile-edit-btn"
            onClick={() => navigate("/profile/editprofile")}>
            Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
