import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import { MaxWidthContainer } from "../utils/styles";
import { Link } from "@reach/router";

interface INotFound extends RouteComponentProps {}

const NotFound: React.FC<INotFound> = () => {
  return (
    <NotFoundContainer>
      <h2>You are lost in deep space 🌌</h2>
      <Link to="/">Return Home</Link>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled(MaxWidthContainer)`
  text-align: center;
`;

export default NotFound;
