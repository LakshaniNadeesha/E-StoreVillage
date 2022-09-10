import React from "react";
import "./ManagerProductList.css";
import {AiOutlinePlus} from "react-icons/ai";
import ManagerProductCard from "../../../components/ProductCard/ManagerProductCard";
const ManagerProductList = () => {
    let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    return (
        <div>
            <div>
                <select className="product-category" placeholder="category type">
                    <option value="accessories" style={{color:"#656464"}}>Accessories</option>
                    <option value="clothing" style={{color:"#656464"}}>Clothing</option>
                    <option value="bakeryItems" style={{color:"#656464"}}>Bakery Items</option>
                    <option value="cosmetics" style={{color:"#656464"}}>Cosmetic</option>
                    <option value="giftBoxes" style={{color:"#656464"}}>Gift Boxes</option>
                    <option value="other" style={{color:"#656464"}}>Others</option>
                </select>
            </div>
            <br/>
            <div className="product-list2-grid">

                {sampleArray.map((item, index) => (
                    <ManagerProductCard key={index} />
                ))}

                {/*<div className="add-product-container">*/}
                {/*  <FiPlus size={"40%"} color="#778292" />*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ManagerProductList;
