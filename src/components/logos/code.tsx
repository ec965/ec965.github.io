import * as React from "react";
import styled from "styled-components";
import { GoCode } from "react-icons/go";

const CodeLogoDiv = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

interface CodeLogoProps {
  href?: string;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CodeLogo  = ({ href }: CodeLogoProps) => {
  return (
    <CodeLogoDiv href={href}>
      <GoCode />
      <p>Source Code</p>
    </CodeLogoDiv>
  );
};
