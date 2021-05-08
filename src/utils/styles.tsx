import styled from "styled-components";
import { CenteredElementProps } from "./types";

//Responsive centering without relying on Flexbox or CSS Grid
export const MaxWidthContainer = styled.div<{ width?: string }>`
  max-width: ${({ width = "1800px" }) => width};
  margin: 0 auto;
  height: 100%;
`;

//Cener based on center prop
export const CenteredElement = styled.div<CenteredElementProps>`
  margin: ${({ center }) => (center ? "auto" : 0)};
`;
