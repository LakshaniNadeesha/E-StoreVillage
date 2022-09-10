import React from "react";
import "./ProfileCard.css";
import Profile from "../../assests/images/profile-img1.png";
import { IoRemoveCircleOutline } from "react-icons/io5";

const ProfileCard = () => {

    return (
        <div className="profile-card-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Profile} className="profile-image-container" />
            </div>
            <h5 className="user-name">Sanduni Fernando</h5>
                <button className="user-active-btn">
                    <IoRemoveCircleOutline size={20} />
                    Deactivate
                </button>
        </div>
    );
};

export default ProfileCard;
