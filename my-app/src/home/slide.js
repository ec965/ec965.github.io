import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function SlideShow (props){
  return(
    <Carousel>
      <Carousel.Item>
        <img
          src="./pics/scale_up/hardware_all_view.JPG"
          alt="smartscale"
          className="smsc"
        />
      </Carousel.Item>
    </Carousel>
  );
}
