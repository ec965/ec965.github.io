import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Card from './card';

export default function ProjectSkeleton (props){  
  return(
    <div className="container">
      <div className="row">
        {props.cards.map((card,index)=>(
          <div className="column">
            <Card
              url={card.url}
              img={card.img}
              alt={card.alt}
              title={card.title}
              text={card.text}
              anchor={card.anchor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ProjectSkeleton.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      img: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string
    })
  ),
};