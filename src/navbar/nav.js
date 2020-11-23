import React from 'react';
import {Link} from 'react-router-dom';

export function NavLink(props){
  return(
    <li className="nav-link">
      <Link className="nav-link-text" to={props.link}>{props.name}</Link>
    </li>
  );
}

export function NavLogo(props){
  return(
    <li className="nav-logo">
      <Link className="nav-logo-text" to={props.link}>{props.name}</Link>
    </li>
  );

}

export function NavBar (props){
  return(
    <ul className="nav-bar">
      {props.children}
    </ul>
  );
}