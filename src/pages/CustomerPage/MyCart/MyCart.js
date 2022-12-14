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
import Giveaways from "../EventsPage/Giveaways/Giveaways";
import CartProducts from "./CartProducts";


const MyCart = () => {
    const productList = [{}, {},{}];

    return (
    <div className="my-cart-main-container">
      <div className="my-cart-row">
          <input type="checkbox" className="cart-checkbox"/>
          <span className="my-cart-total-amount">Select All</span>
        <span className="my-cart-total-amount">
          Total Amount - <h3 className="total-price"> Rs. 1200</h3>
        </span>

        <button className="my-cart-checkout-btn">Checkout</button>
      </div>
            <div className="cart-products-row-container">
                <h3 className="my-cart-products-title">Products</h3>
            </div>

            {productList.map((item, index) => (
                <CartProducts key={index} />
            ))}

    </div>
  );
};

export default MyCart;
