import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      NAVBAR
      <Link to='/'>Home</Link>
      <Link to='shop'>Shop</Link>
      <Link to='pages'>Pages</Link>
      <Link to='contact'>Contact</Link>
      <Link to='blog'>Blog</Link>
    </div>
  );
};

export default Navbar;
