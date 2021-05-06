import React, { ChangeEvent, forwardRef, RefObject } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

interface InputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  ref: RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = observer<InputProps, HTMLInputElement>(
  ({ onChange, value, placeholder }, ref) => (
    <StyledInput
      ref={ref}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  ),
  { forwardRef: true }
);

//TODO : CSS VARS OR STYLE PROVIDER FOR COLOURS
const StyledInput = styled.input`
  height: 35px;
  min-width: 400px;
  border-radius: 0;
  background: #1c1f26;
  border: 2px solid #15418c;
  color: white;
  font-size: 1rem;
  padding: 0 8px;

  &::placeholder {
    color: white;
  }
`;

export default Input;
