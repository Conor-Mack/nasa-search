import React, { useContext } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import { Input, Button, Header, SearchControl } from "../components";
import { ImageStoreContext } from "../store";
import { observer } from "mobx-react-lite";

interface HomeProps extends RouteComponentProps {}

const Home: React.FC<HomeProps> = observer(({ children, navigate }) => {
  const store = useContext(ImageStoreContext);

  const searchImages = () => {
    //use navigate to search via route
    navigate!(`search/${store.query}/${store.activePage}`);
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
      {children}
    </div>
  );
});

export default Home;
