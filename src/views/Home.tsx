import React, { useState } from "react";
import styled from "styled-components";
import { RouteComponentProps, Link } from "@reach/router";
import { Input, Button } from "../components";

const Header = styled.h1`
  color: red;
`;

interface IHome extends RouteComponentProps {}

const Home: React.FC<IHome> = ({ children, navigate }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const searchImages = () => {
    //use navigate to search via route
    navigate!(`search/${query}/${page}`);
  };

  return (
    <div className="App">
      <Header>Welcome to my app</Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search/mars/3">Search</Link>
      </nav>
      <Input value={query} onChange={(value) => setQuery(value)}></Input>
      <Button label="Search" onClick={searchImages} />
      {children}
    </div>
  );
};

export default Home;
