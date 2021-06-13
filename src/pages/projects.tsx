import * as React from "react";
import styled from "styled-components";
import { Post } from "../components/post";
import { postData } from "./data";

const PostContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${(props) => props.theme.screenSize.tablet} {
    border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ProjectPage = () => {
  return (
    <React.Fragment>
      {postData.map((post) => (
        <PostContainer
          key={post.title}
          id={post.title.split(" ").join("") || undefined}
        >
          <Post data={post} />
        </PostContainer>
      ))}
    </React.Fragment>
  );
};
