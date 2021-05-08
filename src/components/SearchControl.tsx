import { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { Button, Input } from ".";

interface SearchControlProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchControl: FC<SearchControlProps> = ({
  value,
  placeholder,
  onChange,
  onSearch,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;
      inputElement.focus(); //focus input on load
      const enterKeyEvent = (e: KeyboardEvent) => {
        //Fire onSearch when enter key is pressed
        if (e.key === "Enter") {
          onSearch();
        }
      };
      inputElement.addEventListener("keydown", enterKeyEvent);
      return () => inputElement.removeEventListener("keydown", enterKeyEvent);
    }
  }, [inputRef]);

  return (
    <SearchControlContainer>
      <Input
        ref={inputRef}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></Input>
      <Button onClick={onSearch}>Search</Button>
    </SearchControlContainer>
  );
};

const SearchControlContainer = styled.div``;

export default SearchControl;
