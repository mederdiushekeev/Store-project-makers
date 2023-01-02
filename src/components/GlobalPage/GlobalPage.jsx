import React from "react";
import BlogContextProvider from "../../context/BlogContextProvider";
import PageRoutes from "./PageRoutes";

const GlobalPage = () => {
  return (
    <div>
      <BlogContextProvider>
        <PageRoutes />
      </BlogContextProvider>
    </div>
  );
};

export default GlobalPage;
