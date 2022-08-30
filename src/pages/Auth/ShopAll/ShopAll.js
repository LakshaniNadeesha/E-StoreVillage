import React from "react";
import ShopCard from "../../../components/ShopCard/ShopCard";
import "./shopall.css";

const ShopAll = () => {
    let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {},{},{},{}];
    return (
        <div className="shop-list-grid">
            {sampleArray.map((item, index) => (
                <ShopCard key={index} />
            ))}
        </div>
    );
};

export default ShopAll;
