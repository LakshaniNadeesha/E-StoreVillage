import React from "react";
import "./ComplaintsRespond.css";
import {useNavigate} from "react-router-dom";

const ComplaintsRespond = () => {
    const navigate = useNavigate();

    return (
        <div className="complaint-respond-main-container">
            <div className="complaint-respond-row-container">
                <form className="complaint-respond-form">
                    <div className="complaint-respond-detail-container">
                        <span className="complaint-respond-span">Complaint No</span>
                        <p>210</p>

                        <span className="complaint-respond-span">Complaint</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan ipsum
                            vitae nisi sagittis venenatis. Praesent nec orci et urna ullamcorper sollicitudin
                            ut in dolor. Nunc tempus urna sit amet porta consequat. Nunc vitae lectus felis.</p>

                        <span className="complaint-respond-span">Respond</span>
                        <input type="text" className="complaint-respond-input-text" placeholder="I'll looking to this problem as much as possible"/>
                    </div>

                <div className="complaint-respond-option">
                    <button className="complaint-sent-respond">Send</button>
                    <button className="complaint-respond-cancel" onClick={() => navigate("/complaints")}>Cancel</button>
                </div>
                </form>

            </div>
        </div>
    );
};

export default ComplaintsRespond;
