import React from 'react';
import {Column} from './layout';

export const Card = (props) => {
  return(
    <Column className="card">
      <CardImage src={props.img} alt={"img " + props.title}/>
      <Column className="card-body">
        <CardTitle>
          {props.title}
        </CardTitle>
        <CardBody>
          {props.children}
        </CardBody>
      </Column>
    </Column>
  );
}

export const CardImage = (props) => {
  return(
    <img src={props.src} alt={props.alt} className="card"/>
  );
}

export const CardTitle = (props) => {
  return(<h5 className="card">{props.children}</h5>);
}

export const CardBody = (props) => {
  return(<p className="card">{props.children}</p>)
}