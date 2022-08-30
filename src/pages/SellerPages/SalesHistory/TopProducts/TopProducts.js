import React from "react";
import "./TopProducts.css";
import Chain from "../../../../assests/images/chain.png";
const TopProducts = () => {
  return (
    <div className="sales-history-top-products-row">
      <div className="sales-history-top-products-sub-row">
        <img src={Chain} alt="" />
        <article>
          <h3 style={{ color: "#7B7878" }}>Handmade Bracelet </h3>
          <p style={{ color: "#7B7878", marginTop: 5 }}>52 orders</p>
        </article>
      </div>
      <div className="sales-history-top-products-column">
        <h3>Inventory</h3>
        <h5>200</h5>
      </div>
      <div className="sales-history-top-products-column">
        <h3>Sale</h3>
        <h5>200</h5>
      </div>
      <div className="sales-history-top-products-column">
        <h3>Price</h3>
        <h5>200</h5>
      </div>
      <div className="sales-history-top-products-column">
        <h3>Today</h3>
        <h5>200</h5>
      </div>
    </div>
  );
};

export default TopProducts;
