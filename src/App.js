import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalPage from "./components/GlobalPage/GlobalPage";
// import BlogContextProvider from "./context/BlogContextProvider";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalPage />
      </BrowserRouter>
    </div>
  );
};

export default App;
