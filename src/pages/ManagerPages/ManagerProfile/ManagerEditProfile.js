import React from "react";
import "./ManagerEditProfile.css";
import {BiArrowBack} from "react-icons/bi";
import profile1 from "../../../assests/images/profile.png";
import {useNavigate} from "react-router-dom";
const ManagerEditProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-main-container">
            <div className="profile-row-container">
                <div className="profile-img-container">
                    <BiArrowBack className="back-arrow" size={30} style={{marginRight:"80%"}} onClick={() => navigate("/managerProfile")}/>
                    <h3 className="profile-name"> Dilshan Fernando</h3>
                    <img src={profile1} alt="" className="profile-img" />
                    <p className="change-profile-picture" style={{fontSize:"14px"}}>Change Profile Picture</p>
                </div>

                <span className="profile-vr"></span>
                <div className="edit-profile-detail-container">
                    <span className="edit-profile-span">Name</span>
                    <input type="text" className="input-text" placeholder="Dilshan Fernando"/>

                    <span className="edit-profile-span">E-mail</span>
                    <input type="email" className="input-text" placeholder="dilshanfernando@gmail.com"/>

                    <span className="edit-profile-span">Adddress</span>
                    <textarea className="input-text" placeholder="No:04, Park Road,colombo"/>


                    <span className="edit-profile-span">Contact No</span>
                    <input type="tel" className="input-text" placeholder="076-2563142"/>


                    <button className="profile-save-btn">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default ManagerEditProfile;
