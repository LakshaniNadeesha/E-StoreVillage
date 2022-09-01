import React from "react";
import Logo from "../../assests/images/Logo.png";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { BiHelpCircle, BiMessage } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";

import "./SubNavbar.css";
import { useLocation, useParams, useRoutes } from "react-router-dom";

const SubNavbar = () => {
  const router = useLocation();

  const setHeader = () => {
    if(router.pathname.match(/manager_orders/)){
      return "Orders";
    }else if(router.pathname.match(/complaints/)){
      return "Complaints";
    } else if(router.pathname.match(/promotion_request/)){
      return "Promotion Requests";
    } else if (router.pathname.match(/order/)) {
      return "My Orders";
    } else if (router.pathname === "/shop") {
      return "Shops";
    } else if (router.pathname.match(/event/)) {
      return "Events";
    } else if (router.pathname.match(/product/)) {
      return "Products";
    } else if (router.pathname.match(/cart/)) {
      return "My Cart";
    } else if (router.pathname.match(/profile/)) {
      return "My Profile";
    } else if (router.pathname.match(/shopProfile/)) {
      return "Shop Profile";
    } else if (router.pathname.match(/salesHistory/)) {
      return "Sales History";
    } else if (router.pathname === "/myshop") {
      return "My Shop";
    } else if (router.pathname === "/discounts") {
      return "Discounts";
    } else if (router.pathname === "/") {
      return "Product";
    }
  };

  return (
    <div>
      <div className="sub-navbar-container">
        <div>
          <img className="sub-nav-logo" src={Logo} />
        </div>

        <div className="sub-nav-input-row">
          <div className="sub-nav-input">
            <FiSearch />
            <input placeholder="search" />
          </div>

          <div className="sub-nav-icon-row">
            <BiHelpCircle size={22} />
            <MdNotificationsNone size={22} />
            <BiMessage size={22} />
          </div>

          <div className="sub-nav-user">
            <CgProfile size={28} className="sub-nav-profile-icon" />
            <p className="sub-nav-profile-txt">User</p>
          </div>
        </div>

        <div className="sub-nav-header-container">
          <span className="sub-nav-header-title">{setHeader()}</span>
          <p className="sub-nav-hr"></p>
        </div>
      </div>
      <div className="sub-nav-space"></div>
    </div>
  );
};

export default SubNavbar;
