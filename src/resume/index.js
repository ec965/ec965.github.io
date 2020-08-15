import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResumePage(props){
  return(
    <Container className="pageFade">
      <Row>
        <h2>Resume</h2>
      </Row>
      <Row>
        <object data={props.data} type="application/pdf" width="100%" height="800px">
          <p>It appears you don't have a PDF plugin for this browser.
            That's ok, <a href={props.src}>click here to download the PDF file.</a></p>
        </object>
      </Row>
    </Container>
  );
}

ResumePage.propTypes = {
  data: PropTypes.string,
  src: PropTypes.string,
};

export default function Resume(){
  return(
    <ResumePage
      data="public_resume.pdf"
      src="public_resume.pdf"
    />
  )
}
