import * as React from "react";
import styled, { css } from "styled-components";
import { ImageData, VideoData } from "../types";
import { flexCenterMixin, overflowCenterMixin } from "./mixins";

const tabletWidth = "500px";
const mobileWidth = "300px";

const mediaWidthMixin = css`
  width: calc(40vw - 150px);

  @media ${(props) => props.theme.screenSize.tablet} {
    width: ${tabletWidth};
  }

  @media ${(props) => props.theme.screenSize.mobile} {
    width: ${mobileWidth};
  }
`;

const SlideDeck = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 0px;
  padding-top: 6px;
  align-items: center;
  & img {
    margin-bottom: 0px;
    margin-right: 6px;
  }
  ${mediaWidthMixin}
  ${overflowCenterMixin}
`;

const Thumbnail = styled.img`
  width: 90px;
  height: 60px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.highlight};
  object-fit: cover;
  opacity: ${(props) => props.theme.hover.opacity};
  transition: ${(props) => props.theme.hover.time};
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: ${(props) => props.theme.hover.time};
  }
`;

export const SlideShowMain = styled.article`
  ${flexCenterMixin}
  flex-direction: column;
`;

const BigScreenImg = styled.img`
  ${mediaWidthMixin}
`;

const videoStyles = css`
  ${mediaWidthMixin}
  object-fit: cover;
  transition: 0.2s;
  display: block;
  height: 100%;
`;

const BigScreenVideo = styled.video`
  ${videoStyles}
`;
const BigScreenYT = styled.div`
  ${videoStyles}
  padding-bottom: 56.25%;
  position: relative;

  & iframe {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const BigScreenMain = styled.div`
  flex-direction: column;
  ${flexCenterMixin}
  & p {
    font-family: ${(props) => props.theme.fontFamily.monospace};
    padding-top: 9px;
  }
`;

interface SlideShowProps {
  media: (ImageData | VideoData)[];
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SlideShow = ({ media }: SlideShowProps) => {
  const [mainMedia, setMainMedia] = React.useState<ImageData | VideoData>(
    media.length > 0 ? media[0] : { src: "", alt: "N/A" }
  );

  return (
    <SlideShowMain>
      <BigScreenMain>
        {"alt" in mainMedia ? (
          <BigScreenImg src={mainMedia.src} alt={mainMedia.alt} />
        ) : mainMedia.src.includes("youtube.com") ? (
          <BigScreenYT>
            <iframe
              title={mainMedia.title}
              src={mainMedia.src}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </BigScreenYT>
        ) : (
          <BigScreenVideo controls={true}>
            <source src={mainMedia.src} />
          </BigScreenVideo>
        )}
        <p>{"alt" in mainMedia ? mainMedia.alt : mainMedia.title}</p>
      </BigScreenMain>
      {media.length > 1 && (
        <SlideDeck>
          {media.map((media) => {
            const thumbnail: ImageData =
              "thumbnail" in media ? media.thumbnail : media;
            return (
              <Thumbnail
                key={thumbnail.src}
                src={thumbnail.src}
                alt={thumbnail.alt}
                onClick={() => setMainMedia(media)}
              />
            );
          })}
        </SlideDeck>
      )}
    </SlideShowMain>
  );
};
