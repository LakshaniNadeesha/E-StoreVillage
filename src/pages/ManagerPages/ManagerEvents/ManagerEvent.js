import React from "react";
import './ManagerEvent.css'
import '../../CustomerPage/EventsPage/TopEvents/topevents.css'
import '../../CustomerPage/EventsPage/eventpage.css'
import {MdFileUpload} from "react-icons/md";
import ManageTopEvent from "../../CustomerPage/EventsPage/TopEvents/ManageTopEvent";
import {useNavigate} from "react-router-dom";

const ManagerEvent = () => {
    const topevents = [{}, {},{}];
    let today = new Date();

    return (
        <div className="event-main-container">
            <div className="event-sub-container">
                <h3 className="event-title" style={{ marginTop: "1%" }}>
                    Create New Event
                </h3>
                <div className="create-new-event">
                    <form className="form-box">
                        <div className="p-full">
                            <div className="p-left">
                                <label>Event Name</label>
                                <input type="text" className="manager-event-input-text" placeholder="New Year Sale"/>
                            </div>

                            <div className="p-right">
                                <label>Registration Fee (LKR)</label>
                                <input type="text" className="manager-event-input-text" placeholder="600.00"/>
                            </div>
                        </div>

                        <div className="p-full">
                            <div className="p-left">
                                <label>Date</label>
                                <input type="date" className="manager-event-input-text1"/>
                            </div>

                            <div className="p-right">
                                <label>Starts At</label>
                                <input type="time" className="manager-event-input-text2"/>
                            </div>
                        </div>

                        <div className="p-full">
                            <div className="p-left">
                                <label>Event Description</label>
                                <input type="text" className="manager-event-input-text3"/>
                            </div>
                        </div>


                        <label>Upload Cover Image</label>
                        <div className="manager-event-file-input">
                            <input type="file" id="event_submission" accept=".jpg, .png" hidden/>
                            <MdFileUpload size={25} style={{marginLeft:"35%"}}/>
                                <p>Browse File to Upload</p>

                        </div>

                        <div className="event-create">
                            <button type="submit">Create</button>
                        </div>


                    </form>
                </div>

            <h3 className="event-title" style={{ marginTop: "5%" }}>
                    Top Events
                </h3>
                {topevents.map((item, index) => (
                    <ManageTopEvent key={index} />
                ))}
        </div>
            </div>
    );
};

export default ManagerEvent;
