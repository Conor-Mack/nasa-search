import styled from "styled-components";

export const MaxWidthContainer = styled.div<{ width?: string }>`
  max-width: ${({ width = "400px" }) => "400px"};
  border: 1px solid red;
`;
