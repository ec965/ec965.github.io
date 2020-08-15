import React from 'react';
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//my stuff
import SlideShow from './slide';
import { Link } from 'react-router-dom';

export default function Home (props){
  return(
    <Container>
      <Row>
        <Col>
          <Link to='/projects'> 
            <SlideShow/>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}



