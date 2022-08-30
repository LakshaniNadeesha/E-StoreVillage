import React from "react";
import "./productall.css";
import { FiPlus } from "react-icons/fi";
import ProductCard from "../../../components/ProductCard/ProductCard";

const ProductsAll = () => {
    let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {},{},{},{}];
    return (
        <div className="product-list-grid">
            {sampleArray.map((item, index) => (
                <ProductCard key={index} />
            ))}


        </div>
    );
};

export default ProductsAll;
