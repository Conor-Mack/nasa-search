import { navigate, Router } from "@reach/router";
import SearchResults from "./views/SearchResults";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import { useContext } from "react";
import { ImageStoreContext } from "./store";
import { SearchControl, Header } from "./components";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const store = useContext(ImageStoreContext);

  const searchImages = () => {
    //use navigate to search via route
    navigate!(`/search/${store.query}/${store.activePage}`);
  };

  return (
    <div className="App">
      <Header>
        <SearchControl
          value={store.query}
          placeholder="...Search Nasa Images"
          onChange={(query) => store.setSearchQuery(query)}
          onSearch={searchImages}
        />
      </Header>

      <Router>
        <Home path="/" />
        <SearchResults path="/search/:query/:page" />
        <NotFound default />
      </Router>
    </div>
  );
});

export default App;
