import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Categories = () => {
  return (
    <div>
      <div className="block_search">
        <button id="cat_btn">
          All Categories{" "}
          <BiChevronDown style={{ width: "2rem", height: "2rem" }} />
        </button>
        |
        <input id="search_inp" type="text" placeholder="What do you need?" />
        <button id="search_btn">SEARCH</button>
      </div>
    </div>
  );
};

export default Categories;
