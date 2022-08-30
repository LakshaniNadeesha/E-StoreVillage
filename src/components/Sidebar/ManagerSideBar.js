import React from "react";
import "./Sidebar.css";
import { FiHome, FiTag, FiUpload } from "react-icons/fi";
import { VscSettingsGear, VscCalendar } from "react-icons/vsc";
import {AiOutlineDislike} from "react-icons/ai";
import {
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiFillShop,
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useParams, useRoutes, useLocation } from "react-router-dom";

const ManagerSidebar = () => {
    const route = useLocation();

    const defaultTxtStyle = {
        color: "black",
        fontWeight: "normal",
        fontSize: 15,
    };

    const selectTxtStyle = { color: "#144967", fontWeight: "bold", fontSize: 20 };

    const iconDefaultColor = "black";
    const iconSelectColor = "#144967";

    return (
        <div>
            <section className="sidebar-container">

                <Link to="/product">
                    <div className="row-container">
                        <div className="icon-container">
                            <FiHome
                                size={25}
                                color={
                                    route.pathname === "/product"
                                        ? iconSelectColor
                                        : iconDefaultColor
                                }
                            />
                        </div>
                        <span
                            style={
                                route.pathname === "/product" ? selectTxtStyle : defaultTxtStyle
                            }>
              Public
            </span>
                    </div>
                </Link>

                <Link to="/shop">
                    <div className="row-container">
                        <div className="icon-container">
                            <AiFillShop
                                size={25}
                                color={
                                    route.pathname.match(/shop/) !== null
                                        ? iconSelectColor
                                        : iconDefaultColor
                                }
                            />
                        </div>
                        <span
                            style={
                                route.pathname.match(/shop/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Shops
            </span>
                    </div>
                </Link>

                <Link to="/manager_events">
                    <div className="row-container">
                        <VscCalendar
                            size={25}
                            color={
                                route.pathname.match(/manager_events/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/manager_events/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Events
            </span>
                    </div>
                </Link>

                <Link to="/manager_orders">
                    <div className="row-container">
                        <FiUpload
                            size={25}
                            color={
                                route.pathname.match(/manager_orders/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/manager_orders/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Orders
            </span>
                    </div>
                </Link>
                <Link to="/complaints">
                    <div className="row-container">
                        <AiOutlineDislike
                            style={{
                                color:
                                    route.pathname.match(/complaints/) !== null
                                        ? iconSelectColor
                                        : iconDefaultColor,

                                fontWeight:
                                    route.pathname.match(/complaints/) !== null
                                        ? "bold"
                                        : "normal",
                                fontSize: 25,
                            }}>

                        </AiOutlineDislike>
                        <span
                            style={
                                route.pathname.match(/discounts/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Complaints
            </span>
                    </div>
                </Link>

                <Link to="/salesHistory">
                    <div className="row-container">
                        <BsPencilSquare
                            size={25}
                            color={
                                route.pathname.match(/salesHistory/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/salesHistory/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Sales History
            </span>
                    </div>
                </Link>
                <Link to="/shopProfile">
                    <div className="row-container">
                        <AiOutlineUser
                            size={25}
                            color={
                                route.pathname.match(/shopProfile/) !== null
                                    ? iconSelectColor
                                    : iconDefaultColor
                            }
                        />
                        <span
                            style={
                                route.pathname.match(/shopProfile/) !== null
                                    ? selectTxtStyle
                                    : defaultTxtStyle
                            }>
              Shop Profile
            </span>
                    </div>
                </Link>

            </section>
            <div style={{ width: "19vw" }}></div>
        </div>
    );
};

export default ManagerSidebar;
