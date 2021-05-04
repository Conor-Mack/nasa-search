import React, { ChangeEvent } from "react";
import { observer } from "mobx-react-lite";

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

const Input: React.FC<InputProps> = observer(({ onChange, value }) => (
  <input
    type="text"
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
  />
));

export default Input;
