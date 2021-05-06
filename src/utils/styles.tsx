import styled from "styled-components";
import { CenteredElementProps } from "./types";

export const MaxWidthContainer = styled.div<{ width?: string }>`
  max-width: ${({ width = "1800px" }) => width};
  margin: 0 auto;
  height: 100%;
`;

export const CenteredElement = styled.div<CenteredElementProps>`
  margin: ${({ center }) => (center ? "auto" : 0)};
`;
