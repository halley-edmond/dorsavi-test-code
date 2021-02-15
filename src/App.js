import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import Provier from "./provider";

function App() {
  return (
      <div className="App">
        <Provier>
          <SearchForm/>
          <SearchResult/>
        </Provier>
      </div>
  );
}

export default App;
