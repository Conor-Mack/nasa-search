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
      <PageDisplay data-testid="page-display">Page {activePage}</PageDisplay>
      <Button onClick={() => onPageButtonClick("next")}>Next</Button>
    </PagerContainer>
  );
});

const PagerContainer = styled(CenteredElement)`
  width: fit-content;
`;

const PageDisplay = styled.span`
  margin: 0px 8px;
`;

export default Pager;
