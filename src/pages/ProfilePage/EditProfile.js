import React from "react";
import "./editprofile.css";
import Profile from "../../assests/images/profile-img.png";
import {BiArrowBack} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
const EditProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-main-container">
            <div className="profile-row-container">
                <div className="profile-img-container">
                    <BiArrowBack className="back-arrow" size={30} style={{marginRight:"80%"}} onClick={() => navigate("/profile")}/>
                    <h3 className="profile-name"> Sanduni Fernando</h3>
                    <img src={Profile} alt="" className="profile-img" />
                    <p className="change-profile-picture" style={{fontSize:"14px"}}>Change Profile Picture</p>
                </div>

                <span className="profile-vr"></span>
                <div className="edit-profile-detail-container">
                    <span className="edit-profile-span">Name</span>
                    <input type="text" className="input-text" placeholder="Sanduni Fernando"/>

                    <span className="edit-profile-span">E-mail</span>
                    <input type="email" className="input-text" placeholder="sandunifernando@gmail.com"/>

                    <span className="edit-profile-span">Address</span>
                    <textarea className="input-text" placeholder="No:256,Galle Road,colombo"/>


                    <span className="edit-profile-span">Contact No</span>
                    <input type="tel" className="input-text" placeholder="071-2356323"/>


                    <button className="profile-save-btn">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
