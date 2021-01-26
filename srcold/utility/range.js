import React from 'react';

export default function Range(props){
  const {id, min=0, max=100, step=10, value, children, onChange} = props;
  return(
    <div className="form-group range">
      <label className="form-label" for={id}>{children}</label>
      <input className="range" type="range" id={id} name={id} min={min} max={max} step={step} value={value} onChange={onChange}/>
    </div>
  );
}