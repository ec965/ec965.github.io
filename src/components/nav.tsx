import styled from "styled-components";

export const NavBar = styled(Page)`
  z-index: 1;
  position: sticky;
  top:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${(props) => props.theme.lrPadding};
  padding-right: ${(props) => props.theme.lrPadding});
  background-color: ${(props) => props.theme.main};
  height: 3em;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

export const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavLogo = styled.div`
  padding-top: 1px;
  padding-bottom: 1px;
`;


export const NavItem = styled(NavLogo)`
  padding-left: 16px;
`;
