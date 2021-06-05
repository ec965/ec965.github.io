import * as React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { DiCodeBadge } from "react-icons/di";

export const FooterMain = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: var(--lr-padding);
  padding-right: var(--lr-padding);
`;

interface FooterGroupProps {
  left?: boolean;
  right?: boolean;
}
export const FooterGroup = styled.div<FooterGroupProps>`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  width: 200px;
  justify-content: ${(props) => {
    if (props.left) return "flex-start";
    if (props.right) return "flex-end";
    else return "center";
  }};
  & svg {
    margin-left: ${props => props.right ? '6px': '0px'};
    margin-right: ${props => props.left ? '6px' : '0px'};
    width: 28px;
    height: 28px;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterMain>
      <FooterGroup left>
        <span title="source code">
          <a href="https://github.com/ec965/ec965.github.io">
            <DiCodeBadge />
          </a>
        </span>
      </FooterGroup>
      <FooterGroup>
        <p>Enoch Chau © 2021</p>
      </FooterGroup>
      <FooterGroup right>
        <span title="Linkedin">
          <a href="https://www.linkedin.com/in/enoch-chau-a2a522126/">
            <SiLinkedin />
          </a>
        </span>
        <span title="Github">
          <a href="https://github.com/ec965">
            <SiGithub />
          </a>
        </span>
      </FooterGroup>
    </FooterMain>
  );
};
