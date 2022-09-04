import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./sellerproductlist.css";
import {AiOutlinePlus} from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import {RiShoppingBagLine} from "react-icons/ri";
import SellerProductCart from "../../../components/ProductCard/SellerProductCart";
import {useNavigate} from "react-router-dom";
const SellerProductList = () => {
    const navigate = useNavigate();
    let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <div>
            <div className="add-product-button">
                <button onClick={() => navigate("/add_new_product")}>
                    <AiOutlinePlus size={22}/>
                    Add New Product</button>
            </div>
        <div className="product-list1-grid">
            {sampleArray.map((item, index) => (
                <SellerProductCart key={index} />
            ))}

            {/*<div className="add-product-container">*/}
            {/*  <FiPlus size={"40%"} color="#778292" />*/}
            {/*</div>*/}
        </div>
        </div>
    );
};

export default SellerProductList;
