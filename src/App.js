import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalPage from "./components/GlobalPage/GlobalPage";
import PageRoutes from "./components/GlobalPage/PageRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <GlobalPage/>
      </BrowserRouter>
    </div>
  );
};

export default App;
