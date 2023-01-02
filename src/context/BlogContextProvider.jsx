import axios from "axios";
import React, { createContext, useReducer } from "react";

export const blogContext = createContext();
const obj = {
  products: [],
};

const reducer = (state = obj, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
  }
};

const BlogContextProvider = ({ children }) => {
  const API = "http://localhost:8000/products";
  const [state, dispatch] = useReducer(reducer, obj);

  // !Function

  //   function to add value
  const addProductFunc = async (newProduct) => {
    await axios.post(API, newProduct);
  };
  // function to get values from db
  const getProductFunc = async () => {
    const { data } = await axios(API);
    console.log(data);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const values = { addProductFunc, getProductFunc, products: state.products };
  return <blogContext.Provider value={values}>{children}</blogContext.Provider>;
};

export default BlogContextProvider;
