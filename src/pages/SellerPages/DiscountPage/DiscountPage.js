import React from "react";
import "./DiscountPage.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import {AiOutlinePlus} from "react-icons/ai";
const DiscountPage = () => {
  const discounts = [{}, {}, {}, {}];
  return (
    <div className="discount-main-container">
      <div className="discount-header-row-container">
        <h3>All Discounts</h3>
        <button className="create-discount-btn">Create Discount</button>
      </div>

      {discounts.map((item, key) => (
        <div className="discount-main-row" key={key}>
          <div className="discount-sub-row">
            <MdCheckBoxOutlineBlank size={35} />
            <div>
              <h3>20% off from all your products</h3>
              <p>22 Oct 2022 - 22 Jan 2021</p>
            </div>
          </div>
          <div className="highlight-discount">20%Off</div>
        </div>
      ))}
    </div>
  );
};

export default DiscountPage;
