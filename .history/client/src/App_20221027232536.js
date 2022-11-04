import React from "react";
import { BrowserRoute as router } from "react-router-dom";
import Header from "./component/header/Header";
import MainPages from "./component/mainPages/Pages"
import { DataProvider } from "./globalState";

function App() {
  return (
    <DataProvider>
      <router>
        <div className="App">Hello client</div>
      </router>
    </DataProvider>
  );
}

export default App;
