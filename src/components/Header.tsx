import { FC } from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../utils/styles";
import logo from "../images/nasa_logo.png";
import Image from "./Image";

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  return (
    <StickyHeader>
      <HeaderContent>
        <LogoContainer>
          <Image center src={logo} />
        </LogoContainer>
        <SearchInputContainer>{props.children}</SearchInputContainer>
      </HeaderContent>
    </StickyHeader>
  );
};

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  min-height: 120px;
  border-bottom: solid black;
  background-image: url("/landing_bg.jpg");
`;

const HeaderContent = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoContainer = styled.div`
  flex: 1;
  border: 1px solid red;
`;

const SearchInputContainer = styled.div`
  flex: 1;
  border: 1px solid blue;
`;

export default Header;
