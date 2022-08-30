import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./productlist.css";
import { FiPlus } from "react-icons/fi";
const ProductList = () => {
  let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="product-list1-grid">
      {sampleArray.map((item, index) => (
        <ProductCard key={index} />
      ))}

      {/*<div className="add-product-container">*/}
      {/*  <FiPlus size={"40%"} color="#778292" />*/}
      {/*</div>*/}
    </div>
  );
};

export default ProductList;
