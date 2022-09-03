import React from "react";
import "./ManagerProductList.css";
import {AiOutlinePlus} from "react-icons/ai";
import ManagerProductCard from "../../../components/ProductCard/ManagerProductCard";
const ManagerProductList = () => {
    let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    return (
        <div>
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
