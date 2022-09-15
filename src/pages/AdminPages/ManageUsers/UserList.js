import React from "react";
import ProfileCard from "../../../components/ProfileCard/ProfileCart";
import "./UserList.css";
import {useNavigate} from "react-router-dom";
const UserList = () => {
    const navigate = useNavigate();
    let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <div>
            <div className="product-list1-grid">
                {sampleArray.map((item, index) => (
                    <ProfileCard key={index} />
                ))}

            </div>
        </div>
    );
};

export default UserList;
