import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { barContentMixin } from "./mixins";

export const HeaderMain = styled.header`
  ${barContentMixin}
  z-index: 1;
  position: sticky;
  top: 0;
  height: 3em;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 6px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

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
        <h2>Enoch Chau</h2>
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
