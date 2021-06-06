import * as React from "react";
import styled from "styled-components";
import { ImageData } from "../types";
const tabletWidth = "500px";
const mobileWidth = "300px";

const SlideDeck = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: row;
  padding-right: 0px;
  padding-top: 6px;
  & img {
    margin-bottom: 0px;
    margin-right: 6px;
  }
  width: ${tabletWidth};

  @media ${(props) => props.theme.screenSize.mobile} {
    width: ${mobileWidth};
  }
`;

const Thumbnail = styled.img`
  width: 90px;
  height: 60px;
  border-radius: 5px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BigScreen = styled.img`
  width: calc(40vw - 150px);
  padding-left: 3px;
  padding-right: 3px;

  @media ${(props) => props.theme.screenSize.tablet} {
    width: ${tabletWidth};
  }
  @media ${(props) => props.theme.screenSize.mobile} {
    width: ${mobileWidth};
  }
`;

const BigScreenMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    font-family: ${(props) => props.theme.fontFamily.monospace};
    padding-top: 9px;
  }
`;

interface SlideShowProps {
  images: ImageData[];
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SlideShow = ({ images }: SlideShowProps) => {
  const [mainImage, setMainImage] = React.useState<ImageData>(
    images.length > 0 ? images[0] : { src: "", alt: "N/A" }
  );
  return (
    <SlideShowMain>
      <BigScreenMain>
        <BigScreen src={mainImage.src} alt={mainImage.alt} />
        <p>{mainImage.alt}</p>
      </BigScreenMain>
      {images.length > 1 && (
        <SlideDeck>
          {images.map((thumbnail) => (
            <Thumbnail
              key={thumbnail.src}
              src={thumbnail.src}
              alt={thumbnail.alt}
              onClick={() => setMainImage(thumbnail)}
            />
          ))}
        </SlideDeck>
      )}
    </SlideShowMain>
  );
};
