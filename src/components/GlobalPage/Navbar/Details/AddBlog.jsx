import React, { useContext, useState } from "react";
import { blogContext } from "../../../../context/BlogContextProvider";

const AddBlog = () => {
  const [img, setImg] = useState("");
  const [head, setHead] = useState("");
  const [descr, setDescr] = useState("");
  const { addProductFunc } = useContext(blogContext);
  const collectValues = () => {
    let obj = {
      img,
      head,
      descr,
    };
    addProductFunc(obj);
    setImg("");
    setHead("");
    setDescr("");
  };

  return (
    <div className="blog-container">
      <h4 className="blog-main-header">From The Blog</h4>
      <input
        onChange={(e) => setImg(e.target.value)}
        type="text"
        value={img}
        placeholder="img"
      />
      <input
        onChange={(e) => setHead(e.target.value)}
        type="text"
        value={head}
        placeholder="header"
      />
      <input
        onChange={(e) => setDescr(e.target.value)}
        type="text"
        value={descr}
        placeholder="descr"
      />
      <button onClick={collectValues}>save</button>
    </div>
  );
};

export default AddBlog;
