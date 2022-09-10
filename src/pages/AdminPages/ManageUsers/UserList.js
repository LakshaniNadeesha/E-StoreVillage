import React from "react";
import ProfileCard from "../../../components/ProfileCard/ProfileCart";
import "./UserList.css";
import {AiOutlinePlus} from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import {RiShoppingBagLine} from "react-icons/ri";
import SellerProductCart from "../../../components/ProductCard/SellerProductCart";
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
