import * as React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { LinkData } from "../types";
import { MountainProjectLogo } from "./logos/mountainProject";

export const ArticleMain = styled.article`
  & header {
    padding-bottom: 5px;
    & h2 {
      padding-bottom: 5px;
    }
  }
  & p {
    text-align: justify;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  & a {
    margin-right: 12px;
  }
  & svg {
    padding-bottom: 3px;
    width: 24px;
    height: 24px;
  }
`;

interface ArticleProps {
  title: string;
  subtitle: string;
  body: string | React.ReactNode;
  links: LinkData[];
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Article = ({ links, title, subtitle, body }: ArticleProps) => {
  return (
    <ArticleMain>
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <LinkContainer>
          {links.map((link) => (
            <a key={link.href} href={link.href} title={link.text}>
              {link.text.toLowerCase() === "github" ? (
                <SiGithub />
              ) : link.text.toLowerCase() === "linkedin" ? (
                <SiLinkedin />
              ) : link.text.toLowerCase() === "mountainproject" ? (
                <MountainProjectLogo width="24px" />
              ) : (
                <h3>{link.text}</h3>
              )}
            </a>
          ))}
        </LinkContainer>
      </header>
      <section>
        {typeof body === "string" ? (
          body.split("\n").map((text, i, arr) =>
            i !== arr.length - 1 ? (
              <React.Fragment key={i}>
                <p>{text}</p>
                <br />
              </React.Fragment>
            ) : (
              <p key={i}>{text}</p>
            )
          )
        ) : (
          <p>{body}</p>
        )}
      </section>
    </ArticleMain>
  );
};
