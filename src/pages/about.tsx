import * as React from "react";
import { Post, PostContainer } from "../components/post";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AboutPage = () => {
  return (
    <PostContainer>
      <Post
        data={{
          title: "Hello!",
          subtitle: "I'm Enoch.",
          links: [
            { href: "https://github.com/ec965", text: "Github" },
            {
              href: "https://linkedin.com/in/enoch-chau-a2a522126",
              text: "Linkedin",
            },
            {
              href: "https://www.mountainproject.com/user/200380484/enoch-chau",
              text: "MountainProject",
            },
            {
              text: "Resume",
              href: "./public_resume.pdf",
            },
          ],
          media: [{ src: "me.JPG", alt: "Red Rock, Las Vegas, NV 2019" }],
          body: "I'm interested in electronics and web development. Previously, I worked at GoSite building software to help small buisnesses. When I'm not in front of the computer, I like to cook, climb rocks, and mess with keyboards.",
        }}
      />
    </PostContainer>
  );
};
