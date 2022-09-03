import React from "react";
import './ManageComplaints.css';
import profile1 from "../../../assests/images/profile.png";
import {FiSearch} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const ManageComplaints = () => {
    const complaints = [{}, {}, {}, {}];
    const navigate = useNavigate();

    return(
        <div className="complaints-main-container">
                <div className="complaint-search-input">
                    <FiSearch />
                    <input placeholder="Search" style={{fontSize:"15px"}}/>
                </div>

            <table style={{ width: "100%", borderSpacing: 0 }}>
                <tbody>
                <tr className="complaints-table-header ">
                    <td
                        style={{
                            width: "15%",
                            padding: "1.5% 2%",
                            textAlign: "left",
                            borderBottomLeftRadius: 31,
                            borderTopLeftRadius: 31,
                        }}
                        className="complaints-table-header-txt">
                        Complaint No
                    </td>
                    <td
                        className="complaints-table-header-txt"
                        style={{ width: "15%", textAlign: "center" }}>
                        Customer
                    </td>
                    <td
                        className="complaints-table-header-txt"
                        style={{ width: "50%", textAlign: "center" }}>
                        Complaint
                    </td>
                    <td
                        style={{
                            width: "20%",
                            textAlign: "center",
                            borderBottomRightRadius: 31,
                            borderTopRightRadius: 31,
                        }}
                        className="complaints-table-header-txt">
                        Option
                    </td>
                </tr>
                <div style={{ height: 10 }}></div>

                {complaints.map((item, indxe) => (
                    <>
                        <tr style={{ backgroundColor: "white" }}>
                            <td
                                style={{
                                    width: "15%",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    padding: "2%",
                                }}>
                                <div className="complaint-no-row">
                                    <span className="complaints-detail-txt">210</span>
                                </div>
                            </td>
                            <td
                                style={{
                                    width: "15%",
                                    padding: "2%",
                                }}>
                                <div className="complaints-customer-name">
                                    <img src={profile1} className="complaints-customer-item-size" />
                                    <p className="complaints-customer-name-txt">
                                        Sandun Fernando
                                    </p>
                                </div>
                            </td>
                            <td style={{ width: "50%", padding: "2%" }}>
                                <h3 className="complaints-detail-txt">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed accumsan ipsum vitae nisi sagittis venenatis. Praesent nec orci et urna ullamcorper sollicitudin ut in dolor. Nunc tempus
                                    urna sit amet porta consequat. Nunc vitae lectus felis.

                                </h3>
                            </td>

                            <td
                                style={{
                                    width: "20%",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    padding: "2%",
                                }}>
                                <div className="complaints-respond-option">
                                    <button onClick={() => navigate("/complaints/repond")}>Respond</button>
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

export default ManageComplaints;
