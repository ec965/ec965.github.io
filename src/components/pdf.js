import React from 'react';

const Pdf = (props) => {
  return(
    <object data={props.src} type="application/pdf" className="pdf">
      <p>It appears you don't have a PDF plugin for this browser.
        That's ok, <a href={props.src}>click here to download the PDF file.</a></p>
    </object>
  );
}
export default Pdf;