import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Categories = () => {
  return <div>
    <div id="categories_inp">
      <div className="categories-inp">
      <button id="categories_btn">All Categories <BiChevronDown style={{width: '1.2rem', height: '1.2rem'}}/></button>
      |
      <input id="search_inp" type="text" placeholder="What do you need?"/>
      </div>
      <button id="search_btn">SEARCH</button>
    </div>
  </div>;
};

export default Categories;
