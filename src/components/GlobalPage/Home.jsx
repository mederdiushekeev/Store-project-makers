import React from "react";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Line from "./Line/Line";
import Navbar from "./Navbar/Navbar";
import Navigation from "./Navigation/Navigation";

const Home = () => {
  return <div>
    <Line/>
    <br/>
    <Navbar/>
    <br/>
    <Navigation/>
    <br/>
    <Content/>
    <br/>
    <Footer/>
  </div>;
};

export default Home;
