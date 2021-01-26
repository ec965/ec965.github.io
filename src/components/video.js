import React from 'react';

export const Video = (props) => {
  return(
    <video onClick={props.onClick} controls={!props.noControls} className={`${props.className} video`}>
      <source src={props.src}/>
    </video>
  );
}

export const YTVideo = (props) => {
  return(
    <iframe onClick={props.onClick} className={`video ${props.className}`} title="youtube video"
      src={props.src} 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
    />
  );
}