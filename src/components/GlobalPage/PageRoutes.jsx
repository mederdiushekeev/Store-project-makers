import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentBlock1 from "./Content/ContentBlock1/ContentBlock1";
import ContentBlock2 from "./Content/ContentBlock2/ContentBlock2";
import Home from "./Home";
import Autorization from "./Line/Details/Autorization";
import AddBlog from "./Navbar/Details/AddBlog";
import Blog from "./Navbar/Details/Blog";
import Contact from "./Navbar/Details/Contact";
import Pages from "./Navbar/Details/Pages";
import Shop from "./Navbar/Details/Shop";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        //! LINE components
        <Route path="autorization" element={<Autorization />} />
        //! NAVBAR components
        <Route path="*" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="pages" element={<Pages />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-add" element={<AddBlog />} />
        //! NAVIGATION components //! CONTENT components
        <Route path="block1" element={<ContentBlock1 />} />
        <Route path="block2" element={<ContentBlock2 />} />
        <Route path="*" element={<h1>error</h1>} />
        //! FOOTER components
      </Routes>
    </div>
  );
};

export default PageRoutes;
