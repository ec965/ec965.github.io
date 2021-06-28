import * as React from "react";
import styled from "styled-components";
import { Post, PostContainer } from "../components/post";
import { postData } from "./data";

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
