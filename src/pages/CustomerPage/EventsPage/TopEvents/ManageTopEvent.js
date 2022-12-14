import React from "react";
import "./topevents.css";
import Banner from "../../../../assests/images/top-events.png";
import {useNavigate} from "react-router-dom";

const ManageTopEvent = () => {
    const navigate = useNavigate();

    return (
        <div className="top-event-row-container">
            <img src={Banner} className="top-event-img-container" />
            <div>
                <h3>11.11 has returned!!!!</h3>
                <p className="top-event-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
                    ipsum vitae nisi sagittis venenatis. Praesent nec orci et urna
                    ullamcorper sollicitudin ut in dolor. Nunc tempus urna sit amet porta
                    consequat. Nunc vitae lectus felis.
                </p>
                <button className="event-manage-update" onClick={() => navigate("/manager_events/edit_event")}>Edit</button>
                <button className="event-manage-remove" onClick={() => navigate("/manager_events/remove_event")}>Remove</button>
            </div>
        </div>
    );
};

export default ManageTopEvent;
