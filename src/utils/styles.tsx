import styled from "styled-components";
import { CenteredElementProps } from "./types";

export const MaxWidthContainer = styled.div<{ width?: string }>`
  max-width: ${({ width = "1500px" }) => width};
  margin: 0 auto;
  border: 1px solid red;
  height: 100%;
`;

export const CenteredElement = styled.div<CenteredElementProps>`
  margin: ${({ center }) => (center ? "auto" : 0)};
`;
