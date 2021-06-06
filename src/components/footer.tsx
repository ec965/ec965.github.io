import * as React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { CodeLogo } from "./logos/code";

export const FooterMain = styled.footer`
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media ${(props) => props.theme.screenSize.mobile} {
    justify-content: center;
  }
`;

interface FooterGroupProps {
  left?: boolean;
  right?: boolean;
  mobileHide?: boolean;
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
    margin-left: ${(props) => (props.right ? "6px" : "0px")};
    margin-right: ${(props) => (props.left ? "6px" : "0px")};
    width: 24px;
    height: 24px;
  }
  @media ${(props) => props.theme.screenSize.mobile} {
    display: ${(props) => (props.mobileHide ? "none" : "flex")};
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Footer = () => {
  return (
    <FooterMain>
      <FooterGroup left mobileHide>
        <span title="Source Code">
          <CodeLogo href="https://github.com/ec965/ec965.github.io" />
        </span>
      </FooterGroup>
      <FooterGroup>
        <p>Enoch Chau © 2021</p>
      </FooterGroup>
      <FooterGroup right mobileHide>
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
