import React, { ChangeEvent } from "react";

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({ onChange, value }) => (
  <input
    type="text"
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
  />
);

export default Input;
