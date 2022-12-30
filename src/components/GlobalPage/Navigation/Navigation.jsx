import React, { useState } from "react";
import Categories from "./Details/Categories";
import Communication from "./Details/Communication";
import Depatments from "./Details/Depatments";
import './Navigation.css'
import './images/arrow.png'
import './images/burger-menu.png'
import { BiChevronDown } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";

const Navigation = () => {
  const [department, setDepartment] = useState()
  return <div className="navigation">
    <div className="inner_navigation">
    <div className="department">
      <button onClick={() => setDepartment(!department)} id="burger_btn">
        <BiMenu style={{ width: "1.3rem", height: "1.3rem" }} />
        All Department
        <BiChevronDown
          style={{ width: "1.3rem", height: "1.3rem" }}
          />
      </button>
    </div>
    
    <Categories/>
    
    <Communication/>
    </div>
          {department ? <Depatments/> : null}
  </div>;
};

export default Navigation;
