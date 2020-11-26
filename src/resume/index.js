import React from 'react';
import PropTypes from 'prop-types';

//112.9px is the height of the navbar combined with the footer
//subtracting 112.9px from 100% of the view height will perfectly fit the pdf object
function ResumeObject(props){
  return(
    <div className="container">
      <object data={props.data} type="application/pdf" width="100%" style={{height:'calc(100vh - 112.9px)'}}>
        <p>It appears you don't have a PDF plugin for this browser.
          That's ok, <a href={props.src}>click here to download the PDF file.</a></p>
      </object>
    </div>
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
