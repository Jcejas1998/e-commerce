import React from "react";
import { BrowserRouter} from "react-router-dom";
import Header from "./component/header/Header";
import MainPages from "./component/mainPages/Pages"
import { DataProvider } from "./globalState";

function App() {
  return (
    <DataProvider>
      <router>
        <Header/>
        <MainPages/>
      </router>
    </DataProvider>
  );
}

export default App;
