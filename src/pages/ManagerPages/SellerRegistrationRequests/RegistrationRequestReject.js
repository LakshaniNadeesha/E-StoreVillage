import React from "react";
import "./RegistrationAcceptReject.css";
import {useNavigate} from "react-router-dom";

const RegistrationRequestReject = () => {
    const navigate = useNavigate();

    return (
        <div className="reg-request-reject-main-container">
            <div className="reg-request-reject-row-container">
                <p className="reg-reject-verify-p">Are you sure you want to reject this seller registration request?</p>
                <div className="reg-request-respond-option">
                    <button className="reg-request-manager-reject">Reject</button>
                    <button className="reg-request-manager-cancel" onClick={() => navigate("/registration_request")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default RegistrationRequestReject;
