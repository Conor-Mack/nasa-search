import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
}) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  background: #15418c;
  color: #fff;
  border-style: none;
  outline: none;
  border: 2px solid #15418c;
  height: 35px;
  padding: 8px;
  margin: 0 5px;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 0.3);

  &:disabled {
    background: #616267;
    color: #000;
    cursor: not-allowed;
    border: none;
  }
`;

export default Button;
