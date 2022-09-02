import React from "react";
import "./PromotionAcceptReject.css";
import {useNavigate} from "react-router-dom";

const PromotionRequestAccept = () => {
    const navigate = useNavigate();

    return (
        <div className="pro-accept-main-container">
            <div className="pro-accept-row-container">
                <p className="verify-p">Are you sure you want to accept the promotion request?</p>
                <div className="pro-manager-request-respond-option">
                <button className="pro-manager-accept">Accept</button>
                <button className="pro-manager-cancel" onClick={() => navigate("/promotion_request")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default PromotionRequestAccept;
