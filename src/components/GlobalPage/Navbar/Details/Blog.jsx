import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useContext, useEffect } from "react";
import { blogContext } from "../../../../context/BlogContextProvider";
import "./Blog.css";
const Blog = () => {
  const { getProductFunc, products } = useContext(blogContext);
  useEffect(() => {
    getProductFunc();
  }, []);

  return (
    <>
      <div className="blog-container">
        <h4 className="blog-main-header">From The Blog</h4>
        {products.map((item) => (
          <div key={item.id} className="blog-content">
            <img src={item.img} alt="" />
            <div className="data-comment">
              <div className="data"></div>
              <div className="comment"></div>
            </div>
            <h2 className="blog-header">{item.head}</h2>
            <p>{item.descr}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
