import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function AboutPage(props){
  return(
    <Container className="pageFade">
      <Row>
        <Col>
          <Row>
            <h2>{props.title}</h2>
          </Row>
          <Row>
            <h4>{props.greeting}</h4>
          </Row>
          <Row>
            <h5>{props.blurb}</h5>
          </Row>
          <Row>
            <h5><a href={'mailto: ' + props.email}>Email: {props.email}</a></h5>
          </Row>
          <Row>
            {props.icons.map((icon,index)=>(
              <a key={index} href={icon.url}>
                <Image alt={icon.alt} src={icon.src} className="icon"/>
              </a>
            ))}
          </Row>
        </Col>
        <Col>
          <Row>
            <Image fluid alt={props.humanpic.alt} src={props.humanpic.src}/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

AboutPage.propTypes={
  title: PropTypes.string,
  greeting: PropTypes.string,
  blurb: PropTypes.node,
  email: PropTypes.string,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
      src: PropTypes.string,
    })
  ),
  humanpic: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
};

