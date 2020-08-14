import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ProjectPage(props){
  return(
    <Container>
      <Row>
        <Col>
          <h2>{props.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.dates}</p>
        </Col>
      </Row>
      <Row>
        {(props.buttons) ? 
          props.buttons.map((button, index)=>(
            <Col key={index} xs={1}>
              <Button
                variant="info"
                href={button.url}
              >
                {button.title}
              </Button>
            </Col>
          )) : null
        }
      </Row>
      <Row>
        <Col>
          <p style={{paddingTop: '15px', paddingBottom: '15px'}}>
            {props.description}
          </p>
        </Col>
      </Row>
       {props.media}
    </Container>     

  );
}

ProjectPage.propTypes={
  title: PropTypes.string,
  dates: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  description: PropTypes.string,
  media: PropTypes.node,
};

export default ProjectPage;
