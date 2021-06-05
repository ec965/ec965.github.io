import styled from "styled-components";

export const Header = styled.header`
  z-index: 1;
  position: sticky;
  top:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${(props) => props.theme.lrPadding};
  padding-right: ${(props) => props.theme.lrPadding};
  height: 3em;
`;

export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderLogo= styled.div`
  padding-top: 1px;
  padding-bottom: 1px;
`;

export const HeaderItem = styled(HeaderLogo)`
  padding-left: 16px;
`;
