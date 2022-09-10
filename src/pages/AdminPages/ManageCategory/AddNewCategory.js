import React from "react";
import "./Category.css";
import {useNavigate} from "react-router-dom";
import {MdFileUpload} from "react-icons/md";

const AddNewCategory = () => {
    const navigate = useNavigate();

    return (
        <div className="add-new-category-main-container">
            <div className="add-new-category-row-container">
                <div className="create-new-category">
                    <form className="new-category-form-box">
                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Category type</label>
                                <input type="text" className="add-new-category-input-text" placeholder="Accessories" required/>
                            </div>
                        </div>

                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Sub Categories (If Any)</label>
                                <input type="text" className="add-new-category-input-text" placeholder="Accessories" required/>
                            </div>
                        </div>

                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Description</label>
                                <textarea className="add-new-category-input-text1"/>
                            </div>
                        </div>

                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Status</label>
                                <select className="add-new-category-input-text2">
                                    <option value="Active" style={{color:"#656464"}}>Active</option>
                                    <option value="Inactive" style={{color:"#656464"}}>Inactive</option>
                                </select>

                            </div>
                        </div>


                        <div className="add-new-category-btn">
                            <button type="submit" className="add-new-category-success-btn">Add</button>
                            <button className="add-new-category-cancel-btn" onClick={() => navigate("/categories")}>Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddNewCategory;
