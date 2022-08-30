import React from "react";
import "./Giveaways.css";
import CompanyLogo from "../../../../assests/images/shop_02.png";
import GiveAway from "../../../../assests/images/giveaway.png";
const Giveaways = () => {
  return (
    <div className="give-awary-row-container">
      <div className="give-away-logo-container">
        <img src={CompanyLogo} className="give-away-image-contianer" />
        <p className="shop-name give-away">Glamour House</p>
      </div>

      <div>
        <h3>DIY Handmade set of earings and necklaces</h3>
        <p className="give-away-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
          ipsum vitae nisi sagittis venenatis. Praesent nec orci et urna
          ullamcorper sollicitudin ut in dolor. Nunc tempus urna sit amet porta
          consequat. Nunc vitae lectus felis.
        </p>

        <div className="giveawary-update-row-container">

          <span className="giveaway-end-date">Ends on - DD/MM/YYYY </span>
        </div>
      </div>

      <img src={GiveAway} alt="" className="giveaway-type" />
    </div>
  );
};

export default Giveaways;
