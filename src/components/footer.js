import React from 'react';

export const Footer = (props) => {
  return <footer className={props.className}>{props.children}</footer>
}

// export const FooterItem = (props) => {
//   return <div className={props.className + ' footer-item'}>{props.children}</div>
// }

export const FooterGroup = (props) => {
  return <div className={props.className + ' footer-group'}>{props.children}</div>
}