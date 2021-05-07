import React from "react";
import { RouteComponentProps } from "@reach/router";

import { observer } from "mobx-react-lite";
import { MaxWidthContainer } from "../utils/styles";
import styled from "styled-components";

interface HomeProps extends RouteComponentProps {}

const Home: React.FC<HomeProps> = observer(({ children, navigate }) => {
  return (
    <HomeContainer>
      <h2>Please make a search 🔎</h2>
    </HomeContainer>
  );
});

const HomeContainer = styled(MaxWidthContainer)`
  text-align: center;
`;

export default Home;
