import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Image from 'react-bootstrap/Image';

export function ImgFormat (props){
  const { img1head, img2head, img3head, img1src, img2src, img3src } = props;
  return( 
    <>
      <Row> 
        <Col>
          <h5 className="image_heading">{img1head}</h5>
          <Image className="project" src={img1src} fluid/>
        </Col>
        {img2src && (
        <Col>
          <h5 className="image_heading">{img2head}</h5>
          <Image className="project" src={img2src} fluid/>
        </Col>
        )}
      </Row>
      {img3src && (
      <Row>
        <h5 className="image_heading">{img3head}</h5>
        <Image className="project" src={img3src} fluid/>
      </Row>
      )}
    </>
  );
}

ImgFormat.propTypes = {
  img1head: PropTypes.string,
  img2head: PropTypes.string,
  img3head: PropTypes.string,
  img1src: PropTypes.string,
  img2src: PropTypes.string,
  img3src: PropTypes.string,
};

export function VidFormat(props){
  return(
    <>
      <Row>
        <Col>
          <h5 className="image_heading">{props.vidhead}</h5>
          <ResponsiveEmbed aspectRatio="16by9">
            {props.youtube 
            ? 
            (<iframe title="youtube video"
              src={props.vidsrc} 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>)
            :
            (<video controls>
              <source src={props.vidsrc}></source>
            </video>)}
          </ResponsiveEmbed>
        </Col>
      </Row>
    </>
  );
}

VidFormat.propTypes = {
  youtube: PropTypes.bool,
  vidsrc: PropTypes.string,
  vidhead: PropTypes.string,
}

export function ProjectPage(props){
  return(
    <Container className="pageFade">
      <Row>
        <Col>
          <Row>
            <h2>{props.title}</h2>
          </Row>

          {props.subtitle && (
            <Row>
              <h3>{props.subtitle}</h3>
            </Row>
          )}

          {props.logos && (
            <Row xs>
              <Col xs>
              {props.logos.map((logo, index)=>(
                  <a href={logo.url}>
                    <Image src={logo.src} alt={logo.alt} style={{marginRight:10}} className="logo"/>
                  </a>
              ))}
              </Col>
            </Row>
          )}

          <Row>
            <h4>{props.dates}</h4>
          </Row>
          
          {props.buttons && (
          <Row>
            {props.buttons.map((button, index)=>(
                  <Button
                    key={index}
                    style={{marginRight: 10}}
                    variant="info"
                    href={button.url}
                  >
                    {button.title}
                  </Button>
              ))}
          </Row>
          )}
          
          <Row>
            <h5 style={{paddingTop: '15px', paddingBottom: '15px'}}>
              {props.description}
            </h5>
          </Row>
        </Col>
      </Row>
        {props.media}
    </Container>     

  );
}

ProjectPage.propTypes={
  title: PropTypes.string,
  subtitle: PropTypes.string,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  dates: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  description: PropTypes.node,
  media: PropTypes.node,
};

