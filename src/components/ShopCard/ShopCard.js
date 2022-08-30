import React from "react";
import "./shopcard.css";
import Shop from "../../assests/images/shop_01.png";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineShoppingCart, AiFillShop } from "react-icons/ai";
import Rating from "react-rating";
import { IoStarOutline, IoMdStar } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import { VscStarEmpty } from "react-icons/vsc";

const ShopCard = () => {
  return (
    <div className="cart-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Shop} className="shop-image-container" />
      </div>

      <div className="shop-name">Love Shop</div>
      <p className="shop-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
        ipsum vitae nisi sagittis venenatis.{" "}
      </p>

      <div className="rating-container">
        <Rating
          readonly
          stop={4}
          initialRating={1}
          emptySymbol={<IoStarOutline size={27} />}
          fullSymbol={
            <GrStar
              style={{ strokeWidth: "2", stroke: "black" }}
              color="#FBBC05"
              size={25}
            />
          }
        />
        <button className="yellow-btn">
          <AiFillShop size={20} />
          Visit The Shop
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
