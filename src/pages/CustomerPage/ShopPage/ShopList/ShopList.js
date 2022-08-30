import React from "react";
import ShopCard from "../../../../components/ShopCard/ShopCard";
import "./shoplist.css";

const ShopList = () => {
  let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="shop-list1-grid">
      {sampleArray.map((item, index) => (
        <ShopCard key={index} />
      ))}
    </div>
  );
};

export default ShopList;
