import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => (
  <button disabled={disabled} onClick={onClick}>
    {label}
  </button>
);

export default Button;
