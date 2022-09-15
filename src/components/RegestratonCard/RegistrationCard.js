import React from "react";
import "./RegistrationCard.css";
import Profile from "../../assests/images/shop_02.png";
import {TiTick} from "react-icons/ti";
import {ImCross} from "react-icons/im";
import {useNavigate} from "react-router-dom";

const RegistrationCard = () => {

    const navigate = useNavigate();

    return (
        <div className="registration-card-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={Profile} className="registration-card-image-container" />
            </div>
            <h5 className="seller-reg-name">Glamour House</h5>
            <div className="reg-btn-row">
                <button className="reg-accept-btn" onClick={() => navigate("/registration_request/accept")}>
                    <TiTick size={24} />
                    Accept
                </button>
                <button className="reg-reject-btn" onClick={() => navigate("/registration_request/reject")}>
                    <ImCross size={14} />
                    Reject
                </button>
            </div>

            {/*<button className="reg-accept-btn">*/}
            {/*    <IoRemoveCircleOutline size={20} />*/}
            {/*    Accept*/}
            {/*</button>*/}
            {/*<button className="reg-accept-btn">*/}
            {/*    <IoRemoveCircleOutline size={20} />*/}
            {/*    Reject*/}
            {/*</button>*/}

        </div>
    );
};

export default RegistrationCard;
