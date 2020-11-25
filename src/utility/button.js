import React from 'react';

export default function Button(props){
  const {color, onClick, type='button', children, className="link-button"} = props;
  return(
    <button 
      className={`${color} courier ${className}`} 
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
export function LinkButton(props){
  const {color, url, children, type} = props;
  return(
    <Button color={color} 
      type={type}
      className="link-button"
      onClick={(e)=>{
        e.preventDefault();
        window.location.href=url;
      }}
    >
      {children}
    </Button>
  );
}