import React from "react";
import { RouteComponentProps } from "@reach/router";

interface INotFound extends RouteComponentProps {}

const NotFound: React.FC<INotFound> = () => {
  return <h2>This route was not found</h2>;
};

export default NotFound;
