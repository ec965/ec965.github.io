import React, {useState} from 'react';
import { Row,Column } from './layout';
import {ButtonLink} from './button';
import {Video, YTVideo} from './video.js';

export const PageFramework = (props) => {
  return(
    <Row className="project">
      <MediaStage media={props.media}/>
      <Column className="project-text">
        <h3>{props.title}</h3>
        <h6 className="courier">{props.subtitle}</h6>
        {props.children}
        <Row className="buttons">
          {props.buttons && 
          <Buttons buttons={props.buttons}/>}
          {props.icons}
        </Row>
      </Column>
    </Row>
  );
}

// Media stage is like a theatre with a stage and an audience.
/* props.media = [
  {img: "/path/to/image, text:"caption"},
  {video: "/path/to/video", text: "caption", thumbnail: "path/to/thumbnail"},
  {ytvideo: "link", text: "caption", thumbnail: "link to thumbnail"}
]*/
const MediaStage = (props) => {
  const [stage, setStage] = useState(props.media[0]);

  const handleClick = (event) => {
    setStage(props.media[event.target.name]);
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
      {stage.img &&
        <img className="gallery-stage" src={stage.img} alt={'img ' + stage} />}
      {stage.vid &&
        <Video className="gallery-stage" src={stage.vid} alt={'vid ' + stage}/>}
      {stage.yt && 
        <YTVideo className="gallery-stage" src={stage.yt} alt={'yt ' +stage}/>}
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