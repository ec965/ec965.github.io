import React from 'react';
import {Link,} from "react-router-dom";

export default function Home (props){
  return(
    <div className="container">
      <Link to="/projects">
        <h1 className="cover-text">Click Here.</h1>
      </Link>
    </div>
  );
}



