import React from "react";
import "./RegistrationAcceptReject.css";
import {useNavigate} from "react-router-dom";

const RegistrationRequestAccept = () => {
    const navigate = useNavigate();

    return (
        <div className="reg-request-reject-main-container">
            <div className="reg-request-accept-row-container">
               <div className="reg-request-full">
                   <div className="reg-request-left">
                       Shop Name
                   </div>
                   <div className="reg-request-right">
                       : Glamour House
                   </div>
               </div>
                <div className="reg-request-full">
                    <div className="reg-request-left">
                        Email
                    </div>
                    <div className="reg-request-right">
                        : glamourhouse@gmail.com
                    </div>
                </div>
                <div className="reg-request-full">
                    <div className="reg-request-left">
                        No of followers
                    </div>
                    <div className="reg-request-right">
                        : 25k
                    </div>
                </div>
                <div className="reg-request-full">
                    <div className="reg-request-left">
                        Social media link
                    </div>
                    <div className="reg-request-right">
                        : https://facebook.com/glamourhouse
                    </div>
                </div>
                <div className="reg-request-full">
                    <div className="reg-request-left">
                        Contact No
                    </div>
                    <div className="reg-request-right">
                        : 076-9632145
                    </div>
                </div>


                <div className="reg-request-accept-respond-option">
                <button className="reg-request-manager-accept">Accept</button>
                <button className="reg-request-manager-accept-cancel" onClick={() => navigate("/registration_request")}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default RegistrationRequestAccept;
