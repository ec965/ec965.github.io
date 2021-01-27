import React, {useState} from 'react';
import {Column, Row, Page} from '../components/layout';
import MultiMediaItem from '../components/multimedia';

const art = [
  {text: 'Face 2018', img: '/pics/art/face.JPG'},
  {text: 'Pot 2018', img:'/pics/art/pot.JPG'},
  {text: 'Averii 2017', img: '/pics/art/averii.JPG'},
  {
    text: 'Cooking with Blake and Kelwin: Ep3', 
    yt:'https://www.youtube.com/embed/8HvNjPW5TXY', 
    thumbnail: 'https://i.ytimg.com/vi/kT8Op8jmf_M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHub3iTAxS7qrWt9361lGH2mKpbg'
  },
  {
    text: 'Cooking with Blake and Kelwin: Ep4', 
    yt:'https://www.youtube.com/embed/kT8Op8jmf_M', 
    thumbnail:'https://i.ytimg.com/vi/8HvNjPW5TXY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJN_dPsbIejhnARd8ZlddR8Yb9A',
  },
  {
    text: 'Cooking with Blake and Kelwin: Ep2', 
    yt:'https://www.youtube.com/embed/Ij89wI493EU',
    thumbnail: 'https://i.ytimg.com/vi/JGY2peNQ_Q4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgYz3BAIIwxmOhc5jVvz6TbQe0bg',
  },
  {
    text: 'Cooking with Blake and Kelwin: Ep1', 
    yt:'https://www.youtube.com/embed/JGY2peNQ_Q4',
    thumbnail: 'https://i.ytimg.com/vi/Ij89wI493EU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2UEGM0gk8JApMQPxb7PkprP3OHA',
  },
];

/* art = [
  {img: "/path/to/image, text:"caption"},
  {video: "/path/to/video", text: "caption", thumbnail: "path/to/thumbnail"},
  {ytvideo: "link", text: "caption", thumbnail: "link to thumbnail"}
]*/
const ArtGallery = (props) => {
  const [stage, setStage] = useState(art[0]);

  const handleClick = (event) => {
    setStage(art[event.target.name]);
  }

  const handleZoom = (event) => {
    
  }

  const audience = art.map((m, i) => {
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
    <Page className='art-gallery'>
      <Column>
        <MultiMediaItem
          className='art-stage'
          media={stage}
        />

        <p className="caption">{stage.text}</p>
        <Row>
          {art.length > 1 && audience}
        </Row>
      </Column>
    </Page>
  );
}

export default ArtGallery;