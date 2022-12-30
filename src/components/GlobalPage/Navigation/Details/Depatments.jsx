import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";

const Depatments = () => {
  return (
    <div>
      <button id="burger_btn">
        <BiMenu style={{ width: "1.3rem", height: "1.3rem" }} />
        All Department
        <BiChevronDown
          style={{ width: "1.3rem", height: "1.3rem" }}
        />
      </button>
    </div>
  );
};

export default Depatments;
