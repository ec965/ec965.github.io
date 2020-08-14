import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function SlideShow (props){
  return(
    <Carousel
      className="slide-deck"
      controls={false}
      fade={true}
    >
      <Carousel.Item>
        <Image
          src="./pics/scale_up/hardware_all_view.JPG"
          alt="smartscale"
          className="slides d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="pics\GPSSS\GPSSS_1.jpg"
          alt="gpsss"
          className="slides d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="pics\hc2.JPG"
          alt="hc2"
          className="slides d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="pics\art\pot.JPG"
          alt="pot"
          className="slides d-block w-100"
        />
      </Carousel.Item>
    </Carousel>
  );
}
