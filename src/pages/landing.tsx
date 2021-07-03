import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { flexCenterMixin } from "../components/mixins";

const widthMixin = css`
  width: 500px;
  @media ${(props) => props.theme.screenSize.mobile} {
    width: 100vw;
  }
`;

const mb = css`
  margin-bottom: 15px;
`;

const Center = styled.article`
  ${flexCenterMixin}
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Image = styled.img`
  ${widthMixin}
  margin-top: 15px;
  ${mb}
`;

const afterLinkMixin = css`
  color: ${(props) => props.theme.colors.main};
  &:after {
    content: " ";
    background-color: #d86681;
    opacity: 50%;
    position: absolute;
    width: 100%;
    height: 25%;
    bottom: 0;
    left: 0;
    transition: ${(props) => props.theme.hover.time};
  }
  &:hover:after {
    height: 100%;
  }
`;

const AfterLink = styled.a`
  ${afterLinkMixin}
`;

const AfterRRLink = styled(Link)`
  ${afterLinkMixin}
`;

const TextContainer = styled.section`
  ${widthMixin}
  & * {
    ${mb}
  }
  & h1,
  h2,
  p {
    text-align: justify;
  }
  @media ${(props) => props.theme.screenSize.mobile} {
    width: calc(100vw - 20px);
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Monospace = styled.p`
  font-family: ${(props) => props.theme.fontFamily.monospace};
`;

export const LandingPage = () => {
  return (
    <Center>
      <TextContainer>
        <h1>Hi!</h1>
        <h2>
          I&apos;m{" "}
          <AfterLink
            title="Linkedin"
            href="https://www.linkedin.com/in/enoch-chau-a2a522126/"
          >
            Enoch
          </AfterLink>
        </h2>
        <p>
          I&apos;m interested in electronics and web development. Previously, I
          worked at{" "}
          <AfterLink title="gosite.com" href="https://www.gosite.com">
            GoSite
          </AfterLink>{" "}
          as a full stack software engineer. I used to keep track of{" "}
          <AfterRRLink to="/projects">my projects</AfterRRLink>, but now I keep
          everything on{" "}
          <AfterLink title="Github" href="https://github.com/ec965">
            Github
          </AfterLink>
          . If I&apos;m not in front of the computer, I&apos;m probably out at{" "}
          <AfterLink
            title="Mountain Project"
            href="https://www.mountainproject.com/user/200380484/enoch-chau"
          >
            the crag
          </AfterLink>
          .
        </p>
        <h3>
          <AfterLink title="resume" href="./public_resume.pdf">
            Resume
          </AfterLink>
        </h3>
      </TextContainer>
      <Image src="me2.png" alt="enoch" />
      <Monospace>San Francisco, CA, 2021</Monospace>
    </Center>
  );
};
