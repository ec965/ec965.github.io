import React from 'react';

export const NavBar = (props) => {
  return <div className={'nav-bar ' + props.className}>{props.children}</div>
}

export const NavGroup = (props) => {
  return <div className={'nav-group ' + props.className}>{props.children}</div>
}

export const NavLogo = (props) => {
  return <div className={'nav-logo ' + props.className}>{props.children}</div>
}

export const NavItem = (props) => {
  return <div className={'nav-item ' + props.className}>{props.children}</div>
}