import React from "react";
import {useNavigate} from "react-router-dom";
import RegistrationCard from "../../../components/RegestratonCard/RegistrationCard";
const UserList = () => {
    const navigate = useNavigate();
    let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <div>
            <div className="product-list1-grid">
                {sampleArray.map((item, index) => (
                    <RegistrationCard key={index} />
                ))}

            </div>
        </div>
    );
};

export default UserList;
