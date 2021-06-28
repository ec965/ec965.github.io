import * as React from "react";
import styled from "styled-components";
import { SlideShow, SlideShowMain } from "./slideshow";
import { Article, ArticleMain } from "./article";
import { PostData } from "../types";

const Container = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & ${ArticleMain} {
    padding-left: 10px;
    width: 40vw;
  }

  & ${SlideShowMain} {
    padding-right: 10px;
  }

  @media ${(props) => props.theme.screenSize.tablet} {
    flex-direction: column;
    justify-content: center;
    & ${ArticleMain} {
      padding-left: 0px;
      width: 100%;
    }

    & ${SlideShowMain} {
      padding-right: 0px;
      padding-bottom: 10px;
    }
  }
`;

interface PostProps {
  data: PostData;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Post = ({ data }: PostProps) => {
  return (
    <Container>
      <SlideShow media={data.media} />
      <Article
        title={data.title}
        body={data.body}
        subtitle={data.subtitle}
        links={data.links}
      />
    </Container>
  );
};

export const PostContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${(props) => props.theme.screenSize.tablet} {
    border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
  }
`;
