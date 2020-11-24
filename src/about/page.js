import React from 'react';
import PropTypes from 'prop-types';

export default function AboutPage(props){
  return(
    <div className="container">
      <div className="row reverse">
        <div className="column two">
            <img className="about-image" src={props.humanpic.src} alt={props.humanpic.alt}/>
        </div>
        <div className="column two">
          <div className="row about-text">
            <h3 className="courier">{props.greeting}</h3>
            <h5 className="courier">{props.name}</h5>

            <p>{props.blurb}</p>
            <div className="row about-logos">
              <div className="column">
                <a href={props.github}>
                  <i className="logo fab fa-github"/>
                </a>
                <a href={props.linkedin}>
                  <i className="logo fab fa-linkedin-in"/>
                </a>
                <a href={props.mountainproject}>
                  <img className="logo" src="/pics/logos/mountainproject.png" alt="mountain_project"/>
                </a>
                <a href={'mailto:' + props.email} className="courier">{props.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutPage.propTypes={
  title: PropTypes.string,
  greeting: PropTypes.string,
  blurb: PropTypes.node,
  email: PropTypes.string,
  mountainproject: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  humanpic: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
};

