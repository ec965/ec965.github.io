import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
//routing
import { LinkContainer } from 'react-router-bootstrap'

//use props.anchor to toggle between <a> and <Link>
//anchors are used for redirecting to an external site
function MyCard (props){
  
  return( 
    <Card style={{width: "18rem", margin: 20}}>
      {props.anchor ? 
        (<a href={props.url}>
          <Card.Img
            variant="top"
            className="mycard"
            src={props.img} 
            alt={props.alt}
          />
        </a>)
        :
        (<LinkContainer to={props.url}>
          <Card.Img
            variant="top"
            className="mycard"
            src={props.img} 
            alt={props.alt}
          />
        </LinkContainer>)
      }
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
  text: PropTypes.string,
  anchor: PropTypes.bool,
};

export default MyCard;
