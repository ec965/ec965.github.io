import styled from "styled-components";

export const Footer = styled.footer`
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: var(--lr-padding);
  padding-right: var(--lr-padding);
  background-color: var(--base02);
  height: 3em;
`;

export const FooterGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  width: 200px;
`;

export const FooterGroupRight = styled(FooterGroup)`
  justify-content: flex-start;
`;
export const FooterGroupLeft = styled(FooterGroup)`
  justify-content: flex-end;
`;
