import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function MyCard (props){
  return( 
    <Card>
      <Card.Img 
        variant="top" 
        src={props.img} 
        alt={props.alt}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

MyCard.propTypes={
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default MyCard;
