import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Header from "./component/headers/Header";



function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">Hello</div>
        <Header/>
      </Router>
    </DataProvider>
  );
}

export default App;
