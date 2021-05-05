import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from ".";
import { observer } from "mobx-react-lite";
import { CenteredElement } from "../utils/styles";

interface PagerProps {
  onChange: (page: number) => void;
  activePage: number;
}

const Pager: FC<PagerProps> = observer(({ onChange, activePage }) => {
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
    setPrevButtonDisabled(activePage <= 1);
  }, [activePage]);

  return (
    <PagerContainer center>
      <Button disabled={disabled} onClick={() => onPageButtonClick("prev")}>
        Prev
      </Button>
      <span>Page {activePage}</span>
      <Button onClick={() => onPageButtonClick("next")}>Next</Button>
    </PagerContainer>
  );
});

const PagerContainer = styled(CenteredElement)`
  border: 1px solid red;
  width: fit-content;
`;

export default Pager;
