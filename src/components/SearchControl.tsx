import { FC } from "react";
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
  return (
    <SearchControlContainer>
      <Input
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
