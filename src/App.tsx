import { Router } from "@reach/router";
import SearchResults from "./views/SearchResults";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import { FC } from "react";

function App() {
  return (
    <Router>
      <Home path="/">
        <SearchResults path="search/:query/:page" />
      </Home>
      <NotFound default />
    </Router>
  );
}

export default App;
