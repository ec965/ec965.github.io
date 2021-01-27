import {Video, YTVideo} from './video.js';

import React from 'react';
// can display any media item
/* props.media = {img: "/path/to/image, text:"caption"}
  props.media = {video: "/path/to/video", text: "caption", thumbnail: "path/to/thumbnail"},
  props.media = {ytvideo: "link", text: "caption", thumbnail: "link to thumbnail"}
*/
const MultiMediaItem = (props) => {
  return(
    <>
      {props.media.img &&
        <img onClick={props.onClick} className={props.className} src={props.media.img} alt={'img ' + props.media.text} />
      }
      {props.media.vid &&
        <Video onClick={props.onClick} className={props.className} src={props.media.vid} alt={'vid ' + props.media.text}/>
      }
      {props.media.yt && 
        <YTVideo onClick={props.onClick} className={props.className} src={props.media.yt} alt={'yt ' + props.media.text}/>
      }
    </>
  );
}
export default MultiMediaItem;