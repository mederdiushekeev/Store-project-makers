import React from "react";
import { Link } from "react-router-dom";
import "../Line/Details/Line.css";
import { BsFacebook } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { RxSlash } from "react-icons/rx";
import { FiLogIn } from "react-icons/fi";

const Line = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <p>Hello@colorlib.com</p>
          <RxSlash></RxSlash>
          <p>Free Shipping for all order of $99</p>
        </div>
        <div className="center-links">
          <a className="fa" href="https://m.facebook.com/">
            <BsFacebook className="fa"></BsFacebook>
          </a>
          <a href="https://web.whatsapp.com/">
            <ImWhatsapp></ImWhatsapp>
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram></BsInstagram>
          </a>
          <a href="https://vk.com/">
            <SlSocialVkontakte></SlSocialVkontakte>
          </a>
        </div>
        <div className="right-side">
          <select>
            <option>English</option>
            <option>Русский</option>
          </select>
          <Link to="autorization">
            <button>
              <FiLogIn></FiLogIn>login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Line;
