import React from 'react';
import PropTypes from 'prop-types';
import {LinkButton,} from '../utility/button';

export function Figure(props){
  return(
    <div className={`figure ${props.className}`}>
      {props.children}
      <h5 className="figure-caption courier">{props.caption}</h5>
    </div>
  );
}

export function MediaFormat (props){
  const { img1src, img2src, img3src, img1head, img2head, img3head, vidsrc, vidhead, youtube } = props;
  return(
    <>
      <div className="figure-container">
          {img1src && (
            <Figure caption={img1head}>
              <img src={img1src} alt={img1head} className="project-image"/>
            </Figure>

          )}
          {img2src && (
            <Figure caption={img2head}>
              <img src={img2src} alt={img2head} className="project-image"/>
            </Figure>
          )}
          {img3src && (
            <Figure caption={img3head}>
              <img src={img3src} alt={img3head} className="project-image"/>
            </Figure>
          )}
          {vidsrc && (
            <Figure caption={vidhead}>
              <Video youtube={youtube} vidsrc={vidsrc}/>
            </Figure>
          )}
      </div>
    </>
  );
}

MediaFormat.propTypes = {
  img1head: PropTypes.string,
  img2head: PropTypes.string,
  img3head: PropTypes.string,
  img1src: PropTypes.string,
  img2src: PropTypes.string,
  img3src: PropTypes.string,
  vidsrc: PropTypes.string,
  vidhead: PropTypes.string,
  youtube: PropTypes.bool
};

export function Video(props){
  return(
    <div className={`video-frame ${props.className}`}>
      {props.youtube 
      ? 
      (<iframe className="video" title="youtube video"
        src={props.vidsrc} 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>)
      :
      (<video className="video" controls>
        <source src={props.vidsrc}></source>
      </video>)}
    </div>
  );
}

Video.propTypes = {
  youtube: PropTypes.bool,
  vidsrc: PropTypes.string,
}

function CompanyLogo(props){
  return(
    <a href={props.url}>
      <img src={props.src} alt={props.alt} className="company-logo"/>
    </a>
  );
}

export function ProjectPage(props){
  return(
    <div className="container">
      <div className="row">
        <div className="column">
          <ul className="project-description">
            <li className="project-description">
              <h2>{props.title}</h2>
            </li>
            {props.subtitle && (
              <li className="project-description">
                <h3>{props.subtitleA}</h3>
              </li>  
            )}


            {props.logos && (
              <li className="project-description">
                {props.logos.map((logo,index)=>(
                  <CompanyLogo src={logo.src} alt={logo.alt} url={logo.url}/>
                ))}
              </li>
            )}

            <li className="project-description">
              <h4>{props.dates}</h4>
            </li>

            {props.buttons && (
              <li className="project-description">
                {props.buttons.map((button,index)=>(
                  <LinkButton color={button.color} key={index} url={button.url}>
                    {button.title}
                  </LinkButton>
                ))}
              </li>
            )}

            <li className="project-description">
              <h5>
                {props.description}
              </h5>
            </li>
          </ul>
        </div>
        {props.media}
      </div>
    </div>
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

