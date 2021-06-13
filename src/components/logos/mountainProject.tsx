import * as React from "react";
import styled from "styled-components";

interface MPImgProps {
  width?: string;
  height?: string;
}
const MPImg = styled.img<MPImgProps>`
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  filter: hue-rotate(123deg);
`;

export const MountainProjectLogo = ({ width, height }: MPImgProps) => (
  <MPImg
    width={width || ""}
    height={height || ""}
    src="./pics/logos/mountainproject.png"
    alt="mountain project"
  />
);
