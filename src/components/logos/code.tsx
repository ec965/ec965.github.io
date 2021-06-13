import * as React from "react";
import styled from "styled-components";
import { GoCode } from "react-icons/go";
import { flexCenterMixin } from "../mixins";

const CodeLogoDiv = styled.a`
  ${flexCenterMixin}
  flex-direction: row;
`;

interface CodeLogoProps {
  href?: string;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CodeLogo = ({ href }: CodeLogoProps) => {
  return (
    <CodeLogoDiv href={href}>
      <GoCode />
      <p>Source Code</p>
    </CodeLogoDiv>
  );
};
