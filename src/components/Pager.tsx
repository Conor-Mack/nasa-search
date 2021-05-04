import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from ".";

interface PagerProps {
  onChange: (page: number) => void;
  activePage: number;
}

const Pager: FC<PagerProps> = ({ onChange, activePage }) => {
  const [disabled, setPrevButtonDisabled] = useState(false);

  const onPageButtonClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (activePage > 1) {
        onChange(activePage - 1);
      }
      return;
    }
    onChange(activePage + 1);
  };

  useEffect(() => {
    if (activePage === 1) {
      setPrevButtonDisabled(true);
    }
  }, [activePage]);

  return (
    <PagerContainer>
      <Button
        disabled={disabled}
        label="Prev"
        onClick={() => onPageButtonClick("prev")}
      />
      <span>{activePage}</span>
      <Button label="Prev" onClick={() => onPageButtonClick("next")} />
    </PagerContainer>
  );
};

const PagerContainer = styled.div`
  width: 250px;
  border: 1px solid red;
  display: flex;
`;

export default Pager;