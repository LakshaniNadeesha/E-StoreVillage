import React from "react";
import "./ManagerProfile.css";
import profile1 from "../../../assests/images/profile.png";
import { Link, useNavigate } from "react-router-dom";


const ManagerProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-main-container">
            <div className="profile-row-container">
                <div className="profile-img-container">
                    <h3 className="profile-name">Dilshan Fernando</h3>
                    <img src={profile1} alt="" className="profile-img" />
                </div>

                <span className="profile-vr"></span>
                <div className="profile-detail-container">
                    <span className="profile-detail-txt">Name - Dilshan Fernando</span>
                    <span className="profile-detail-txt">
            E-mail - dilshanfernando@gmail.com
          </span>
                    <span className="profile-detail-txt">Adddress - No 04, Park Road, Colombo</span>
                    <span className="profile-detail-txt">Contact No - 076-2563142</span>
                    <div className="profile-manager-edit-button">
                    <button onClick={() => navigate("/managerProfile/managereditprofile")}>
                        Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerProfile;
