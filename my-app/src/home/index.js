import React from 'react';
import ReactDOM from 'react-dom';
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//my stuff
import SlideShow from './slide';

export default function Home (props){
  return(
    <Container fluid>
      <Row>
        <SlideShow/>
      </Row>
    </Container>
  );
}



