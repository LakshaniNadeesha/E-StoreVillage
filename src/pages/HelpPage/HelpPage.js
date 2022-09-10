import React from "react";
import "./HelpPage.css";

const HelpPage = () => {

    return (
        <div className="help-page-main-container">
            <div className="help-page-row-container">
                <form className="help-form">
                    <div className="help-p-full">
                        <div className="help-p-left">
                            <label>Complaint Title</label>
                            <input type="text" className="help-page-input-text" placeholder="Regarding Product Purchase"/>
                        </div>
                    </div>


                    <div className="help-p-full">
                        <div className="help-p-left">
                            <label>Complaint</label>
                            <textarea className="help-page-input-text1" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan ipsum vitae nisi sagittis venenatis. Praesent nec orci et urna ullamcorper sollicitudin ut in dolor. Nunc tempus urna sit amet porta consequat. Nunc vitae lectus felis."/>
                        </div>
                    </div>

                    <div className="help-page-respond-option">
                        <button className="help-submit-success">Submit</button>
                        <button className="help-submit-cancel" type="reset">Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default HelpPage;
