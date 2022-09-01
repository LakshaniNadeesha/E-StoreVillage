import React from "react";
import './PromotionRequest.css';
import profile1 from "../../../assests/images/profile.png";
import {FiSearch} from "react-icons/fi";

const PromotionRequest = () => {
    const promotion_requests = [{}, {}, {}, {}];

    return(
        <div className="pro-request-main-container">
            <div className="pro-request-search-input">
                <FiSearch />
                <input placeholder="Search" style={{fontSize:"15px"}}/>
            </div>

            <table style={{ width: "100%", borderSpacing: 0 }}>
                <tbody>
                <tr className="pro-request-table-header ">
                    <td
                        style={{
                            width: "16.66%",
                            padding: "1.5% 2%",
                            textAlign: "left",
                            borderBottomLeftRadius: 31,
                            borderTopLeftRadius: 31,
                        }}
                        className="pro-request-table-header-txt">
                        Request No
                    </td>
                    <td
                        className="pro-request-table-header-txt"
                        style={{ width: "16.66%", textAlign: "center" }}>
                        Promotion Type
                    </td>
                    <td
                        className="pro-request-table-header-txt"
                        style={{ width: "16.66%", textAlign: "center" }}>
                        Quantity
                    </td>

                    <td
                        className="pro-request-table-header-txt"
                        style={{ width: "16.66%", textAlign: "center" }}>
                        Date
                    </td>
                    <td
                        className="pro-request-table-header-txt"
                        style={{ width: "16.66%", textAlign: "center" }}>
                        Customer
                    </td>

                    <td
                        style={{
                            width: "16.67%",
                            textAlign: "center",
                            borderBottomRightRadius: 31,
                            borderTopRightRadius: 31,
                        }}
                        className="pro-request-table-header-txt">
                        Option
                    </td>
                </tr>
                <div style={{ height: 10 }}></div>

                {promotion_requests.map((item, indxe) => (
                    <>
                        <tr style={{ backgroundColor: "white" }}>
                            <td
                                style={{
                                    width: "16.66%",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    padding: "2%",
                                }}>
                                <div className="pro-request-no-row">
                                    <span className="pro-request-detail-txt">523</span>
                                </div>
                            </td>
                            <td style={{ width: "16.66%", padding: "2%" }}>
                                <p className="pro-request-detail-txt">
                                Seasonal Offer
                                </p>
                            </td>
                            <td style={{ width: "16.66%", padding: "2%" }}>
                                <p className="pro-request-detail-txt">
                                    20
                                </p>
                            </td>
                            <td style={{ width: "16.66%", padding: "2%" }}>
                                <p className="pro-request-detail-txt">
                                    30/08/2022
                                </p>
                            </td>

                            <td
                                style={{
                                    width: "15%",
                                    padding: "2%",
                                }}>
                                <div className="pro-request-customer-name">
                                    <img src={profile1} className="pro-request-customer-item-size" />
                                    <p className="pro-request-customer-name-txt">
                                        Sandun Fernando
                                    </p>
                                </div>
                            </td>
                            <td
                                style={{
                                    width: "20%",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    padding: "2%",
                                }}>
                                <div className="pro-request-respond-option">
                                    <button className="pro-accept">Accept</button>
                                    <br/>
                                    <button className="pro-reject">Reject</button>
                                </div>
                            </td>
                        </tr>
                        <div style={{ height: 20 }}></div>
                    </>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default PromotionRequest;
