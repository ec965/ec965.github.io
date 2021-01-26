import React from 'react';

export const Button = (props) => {
  return(
    <button type="button" className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export const ButtonLink = (props) => {
  const handleClick = () => {
    window.open(props.link);
  }
  return(
    <button type="button" className={props.className} onClick={handleClick}>
      {props.children}
    </button>
  );
}