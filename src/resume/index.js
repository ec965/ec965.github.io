import React from 'react';
import PropTypes from 'prop-types';

function ResumeObject(props){
  return(
    <object data={props.data} type="application/pdf" width="100%" height="800px">
      <p>It appears you don't have a PDF plugin for this browser.
        That's ok, <a href={props.src}>click here to download the PDF file.</a></p>
    </object>
  ); 
}

ResumeObject.propTypes = {
  data: PropTypes.string,
  src: PropTypes.string,
};

export default function Resume(){
  return(
    <ResumeObject
      data="public_resume.pdf"
      src="public_resume.pdf"
    />
  )
}
