import React from "react";

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
  <button disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export default Button;
