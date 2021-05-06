import { FC, createRef, useEffect, KeyboardEventHandler } from "react";
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
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      const enterKeyEvent = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          onSearch();
        }
      };
      inputRef.current?.addEventListener("keydown", enterKeyEvent);
      return () =>
        inputRef.current?.removeEventListener("keydown", enterKeyEvent);
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

const SearchControlContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
`;

export default SearchControl;
