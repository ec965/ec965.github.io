import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
//routing
import { Link, useRouteMatch } from 'react-router-dom';

function MyCard (props){
  
  return( 
    <Card style={{width: "18rem", margin: 12}}>
      <Link to={props.url}>
        <Card.Img
          fluid
          variant="top"
          className="mycard"
          src={props.img} 
          alt={props.alt}
        />
      </Link>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

MyCard.propTypes={
  url: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default MyCard;
