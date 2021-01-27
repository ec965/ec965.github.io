import React, {useState} from 'react';
import { Row,Column } from './layout';
import {ButtonLink} from './button';
import MultiMediaItem from './multimedia.js';

export const PageFramework = (props) => {
  return(
    <Row className={props.className + " project"} onClick={props.onClick}>
      {props.media &&
        <MediaStage media={props.media}/>
      }

      <Column className="project-text">
        <h3>{props.title}</h3>
        <h6 className="courier">{props.subtitle}</h6>
        {props.children}
        <Row className="buttons">

          {props.buttons && 
            <Buttons buttons={props.buttons}/>
          }

          {props.icons}
        </Row>
      </Column>
    </Row>
  );
}

// Media stage is like a theatre with a stage and an audience.
// Everyone gets a turn to be on stage.
/* props.media = [
  {img: "/path/to/image, text:"caption"},
  {video: "/path/to/video", text: "caption", thumbnail: "path/to/thumbnail"},
  {ytvideo: "link", text: "caption", thumbnail: "link to thumbnail"}
]*/
export const MediaStage = (props) => {
  const [stage, setStage] = useState(props.media[0]);
  const [zoom, setZoom] = useState(false);

  const handleClick = (event) => {
    setStage(props.media[event.target.name]);
    setZoom(false);
  }

  const handleZoom = (event) => {
    setZoom(!zoom);
  }

  const audience = props.media.map((m, i) => {
    return(
      <Column key={i}>
        {m.img &&
        <img onClick={handleClick} className="gallery-audience" src={m.img} alt={m.img} name={i}/>}
        {m.thumbnail &&
        <img onClick={handleClick} className="gallery-audience" src={m.thumbnail} alt={m.text} name={i}/>}
      </Column>
    );
  });


  return(
    <Column className="gallery">
      <div className="stage-frame">
        <MultiMediaItem
          media={stage}
          className={zoom ? "stage-zoom" : "stage"}
          onClick={handleZoom}
        />
      </div>
      <p className="caption">{stage.text}</p>
      <Row>
        {props.media.length > 1 && audience}
      </Row>
    </Column>
  );
}


const Buttons = (props) => {
  return(
    <>
    {props.buttons.map((b,i) => {
      return(
        <ButtonLink className={b.className + " courier"} key={i} link={b.link}>{b.text}</ButtonLink>
      );
    })}
    </>
  );
}

export default PageFramework;