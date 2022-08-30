import React from "react";
import "./topevents.css";
import Banner from "../../../../assests/images/top-events.png";
const TopEvents = () => {
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
      </div>
    </div>
  );
};

export default TopEvents;
