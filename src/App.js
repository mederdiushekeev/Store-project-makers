import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalPage from "./components/GlobalPage/GlobalPage";

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
