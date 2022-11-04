import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/header/Header";
import MainPages from "./component/mainPages/Pages"
import { DataProvider } from "./globalState";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <MainPages/>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
