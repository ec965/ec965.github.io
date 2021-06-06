import * as React from "react";
import styled from "styled-components";
import { Post } from "../components/post";
import { PostData } from "../types";

const PostContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${(props) => props.theme.screenSize.tablet} {
    border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
  }
`;

interface ProjectPageProps {
  data: PostData[];
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ProjectPage = ({ data }: ProjectPageProps) => {
  return (
    <React.Fragment>
      {data.map((post) => (
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
