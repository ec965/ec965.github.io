import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

export function NavLink(props){
  const [highlight, setHighlight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === props.link){
      setHighlight(true);
    }
    else{
      setHighlight(false);
    }
  }, [location.pathname, props.link])

  return(
    <li className="nav-link">
      <Link className={`nav-link-text ${highlight && "hover"}`} 
        to={props.link}
      >
        {props.name}
      </Link>
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
    <ul className="nav-bar lr-padding">
      {props.children}
    </ul>
  );
}