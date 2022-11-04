import React from "react";
import { BrowserRoute } from "react-router-dom";
import Header from "./component/header/Header";
import MainPages from "./component/mainPages/Pages"
import { DataProvider } from "./globalState";

function App() {
  return (
    <DataProvider>
      <BrowserRoute>
        <Header/>
        <MainPages/>
      </BrowserRoute>
    </DataProvider>
  );
}

export default App;
