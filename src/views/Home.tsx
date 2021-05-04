import React, { useContext, useState } from "react";
import styled from "styled-components";
import { RouteComponentProps, Link } from "@reach/router";
import { Input, Button } from "../components";
import { ImageStoreContext } from "../store";
import { observer } from "mobx-react-lite";

const Header = styled.h1`
  color: red;
`;

interface HomeProps extends RouteComponentProps {}

const Home: React.FC<HomeProps> = observer(({ children, navigate }) => {
  const store = useContext(ImageStoreContext);

  const searchImages = () => {
    //use navigate to search via route
    navigate!(`search/${store.query}/${store.activePage}`);
  };

  return (
    <div className="App">
      <Header>Welcome to my app</Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search/mars/3">Search</Link>
      </nav>
      <Input
        value={store.query}
        onChange={(query) => store.setSearchQuery(query)}
      ></Input>
      <Button label="Search" onClick={searchImages} />
      {children}
    </div>
  );
});

export default Home;
