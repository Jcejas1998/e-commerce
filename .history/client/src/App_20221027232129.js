import React from "react";
import {BrowserRoute as router  } from "react-router-dom";
import {DataProvider} from './globalState'




function App() {
  return (
    <DataProvider>

    <div className="App">
      Hello client
    </div>
    </DataProvider>
  );
}

export default App;
