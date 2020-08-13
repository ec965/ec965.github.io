import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//myStuff
import MyCard from './card';

function ProjectSkeleton (props){  

  return(
    <Container>
      <Row>
        {props.cards.map((card,index)=>(
          <Col key={index} xs="auto">
              <MyCard
                url={card.url}
                img={card.img}
                alt={card.alt}
                title={card.title}
                text={card.text}
                anchor={card.anchor}
              />
          </Col>
        ))}
      </Row>
    </Container>
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

export default ProjectSkeleton;
