import React from "react";
import "./CartProducts.css";
import chain from "../../../assests/images/chain.png";
import {useNavigate} from "react-router-dom";
import {RiShoppingBagLine} from "react-icons/ri";
import {MdRemoveShoppingCart} from "react-icons/md";

const CartProducts = () => {
    const navigate = useNavigate();

    return (
        <div className="my-cart-product-row-container">
            <div className="cart-products-img-container">
                <img src={chain} className="cart-product-image-container" />
            </div>

            <div>
                <h3>Handmade Necklace</h3>
                <p className="cart-product-para">
                    An elegant necklace will add that final touch to your outfit. The link chain will
                    make a worthy addition to your collection of designer accessories and will leave
                    you spellbound while pair this dazzling casual/sporty white gold necklace with a
                    nice pair of earrings to complete your look.
                </p>
                <p className="cart-product-quantity">Quantity: 01</p>

                <div className="my-cart-product-btn-row-container">
                    <div className="cart-btn-row">
                        <button
                            style={{ backgroundColor: "#FBBC05" }}
                            className="my-cart-product-btn" onClick={() => navigate("/buy_now")}>
                            <RiShoppingBagLine size={20} />
                            BuyNow
                        </button>
                        <button
                            style={{ backgroundColor: "#F4685D" }}
                            className="my-cart-product-btn" onClick={() => navigate("/cart/removeCartProduct")}>
                            <MdRemoveShoppingCart size={20}/>
                            Remove
                        </button>
                    </div>

                    <span className="cart-product-shop-name">Glamour House</span>
                </div>


            </div>
        </div>
    );
};

export default CartProducts;
