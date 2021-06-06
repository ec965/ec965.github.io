import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderMain = styled.header`
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  background-color: ${(props) => props.theme.colors.secondary};

  @media ${(props) => props.theme.screenSize.mobile} {
    position: static;
  }
`;

interface HeaderGroupProps {
  monospace?: boolean;
  mobileHide?: boolean;
}
export const HeaderGroup = styled.nav<HeaderGroupProps>`
  display: flex;
  flex-direction: row;
  font-family: ${(props) =>
    props.monospace
      ? props.theme.fontFamily.monospace
      : props.theme.fontFamily.sansSerif};

  & a {
    margin-left: 12px;
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Header = () => {
  return (
    <HeaderMain id="header">
      <HeaderGroup>
        <h1>Enoch Chau</h1>
      </HeaderGroup>
      <HeaderGroup monospace>
        <Link to="/">
          <h2>Projects</h2>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </HeaderGroup>
    </HeaderMain>
  );
};
