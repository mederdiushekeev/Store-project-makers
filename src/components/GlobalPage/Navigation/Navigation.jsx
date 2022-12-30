import React from "react";
import Categories from "./Details/Categories";
import Communication from "./Details/Communication";
import Depatments from "./Details/Depatments";
import './Navigation.css'
import './images/arrow.png'
import './images/burger-menu.png'


const Navigation = () => {
  return <div className="navigation">
    <Depatments/>
    <br/>
    <Categories/>
    <br/>
    <Communication/>
  </div>;
};

export default Navigation;
