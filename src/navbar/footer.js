import React from 'react';

export default function ProjectFooter(props){
  return(
    <footer>
      <div className="footer-spacing">
        <a className="footer-text" href="https://github.com/ec965/ec965.github.io">View this site's source code.</a>
        <p className="footer-text">© Enoch Chau 2020</p>
        <div className="">
          <a href="https://github.com/ec965">
            <i className="footer-logo fab fa-github"/>
          </a>
          <a href="https://www.linkedin.com/in/enoch-chau-a2a522126/">
            <i className="footer-logo fab fa-linkedin-in"/>
          </a>
          <a href="https://www.mountainproject.com/user/200380484/enoch-chau">
            <img className="footer-logo" src="/pics/logos/mountainproject.png" alt="mountain_project"/>
          </a>
        </div>

      </div>
    </footer>
  );
}