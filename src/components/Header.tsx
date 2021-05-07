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
  padding: 8px;
  background-image: url("/landing_bg.jpg");
  box-shadow: 0px 2px 8px #000;
`;

const HeaderContent = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  flex: 1;
  padding: 8px;
`;

const SearchInputContainer = styled.div`
  flex: 1;
  padding: 8px;
`;

export default Header;
