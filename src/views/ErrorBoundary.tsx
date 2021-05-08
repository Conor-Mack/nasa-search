import { withErrorBoundary } from "react-error-boundary";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../utils/styles";
import { Link, RouteComponentProps } from "@reach/router";

const ErrorUI: React.FC = () => {
  return (
    <ErrorUIContainer>
      <h2>Whoops, it looks like our warp drive malfunctioned 🔥</h2>
      <Link to="/">Return Home</Link>
    </ErrorUIContainer>
  );
};

const ErrorUIContainer = styled(MaxWidthContainer)`
  text-align: center;
`;

const withErrorHandling = (
  component: React.ComponentType<RouteComponentProps>
) =>
  withErrorBoundary(component, {
    FallbackComponent: ErrorUI,
  });

//errors occuring from useEffect calls dont activate error boundaries. This hook resolves this
export const useAsyncError = () => {
  const [_, setError] = useState();
  return useCallback(
    (e) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};

export default withErrorHandling;
