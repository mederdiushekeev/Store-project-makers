import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Communication = () => {
  return (
    <div className="communication">
      <div id="communication_call-icon">{<FiPhoneCall />}</div>
      <div id="communication_call-number">
        <h4 id="call-number">+65 11.188.888</h4>
        <p id="call-sup">support 24/7 time</p>
      </div>
    </div>
  );
};

export default Communication;
