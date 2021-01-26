import React from 'react';
import PropTypes from 'prop-types';
//routing
import { Link } from 'react-router-dom';

//use props.anchor to toggle between <a> and <Link>
//anchors are used for redirecting to an external site
export default function Card(props){
  return(
    <div className="card">
      <div className="card-image-frame">
        {props.anchor ? 
          ( <a href={props.url}>
              <img className={`card-image ${props.axis}`} src={props.img} alt={props.alt}/> 
            </a>)
        :
          ( <Link to={props.url}>
              <img className={`card-image ${props.axis}`} src={props.img} alt={props.alt}/>
            </Link>)
        }
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-text">{props.text}</h6>
      </div>
    </div>
  );
}


Card.propTypes={
  url: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  axis: PropTypes.string,
  anchor: PropTypes.bool,
};

