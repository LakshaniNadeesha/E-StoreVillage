import React from "react";
import "./mycart.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Chain from "../../../assests/images/chain.png";
import {RiShoppingBagLine} from "react-icons/ri";
import {AiOutlineShoppingCart} from "react-icons/ai";
import Rating from "react-rating";
import {IoStarOutline} from "react-icons/io5";
import {GrStar} from "react-icons/gr";


const MyCart = () => {
  return (
    <div className="mycart-main-container">
      <div className="my-cart-row">
          <MdCheckBoxOutlineBlank size={32} />
          <span className="my-cart-total-amout">Select All</span>
        <span className="my-cart-total-amout">
          Total Amont - <h3> Rs. 1200</h3>
        </span>

        <button className="my-cart-checkout-btn">Checkout</button>
      </div>
        <div className="add-cart">
        <div className="add-products-cart">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Chain} className="image-container" />
            </div>
            <p className="description">24 in stocks for 3 variants </p>
            <h5 className="product-name">Handmade Necklace </h5>
            <div className="price-container">
                <span className="price">LKR 400.00</span>
                <span className="grand-total">LKR 1250.00</span>
            </div>
            <div className="btn-row1">
                <button className="yellow-btn1">
                    Buy Now
                </button>
                <button className="yellow-btn1">
                    Visit The Shop
                </button>
            </div>

            </div>

            <div className="add-products-cart">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={Chain} className="image-container" />
                </div>
                <p className="description">24 in stocks for 3 variants </p>
                <h5 className="product-name">Handmade Necklace </h5>
                <div className="price-container">
                    <span className="price">LKR 400.00</span>
                    <span className="grand-total">LKR 1250.00</span>
                </div>
                <div className="btn-row1">
                    <button className="yellow-btn1">
                        Buy Now
                    </button>
                    <button className="yellow-btn1">
                        Visit The Shop
                    </button>
                </div>
            </div>


            <div className="add-products-cart">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={Chain} className="image-container" />
                </div>
                <p className="description">24 in stocks for 3 variants </p>
                <h5 className="product-name">Handmade Necklace </h5>
                <div className="price-container">
                    <span className="price">LKR 400.00</span>
                    <span className="grand-total">LKR 1250.00</span>
                </div>
                <div className="btn-row1">
                    <button className="yellow-btn1">
                        Buy Now
                    </button>
                    <button className="yellow-btn1">
                        Visit The Shop
                    </button>
                </div>
            </div>


            </div>

    </div>
  );
};

export default MyCart;
