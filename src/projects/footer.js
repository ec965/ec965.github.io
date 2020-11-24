import React from 'react';

export default function ProjectFooter(props){
  return(
    <footer>
      <a class="myFoot" href="https://github.com/ec965/ec965.github.io">View this site's source code.</a>
      <div>
        <a href="https://github.com/ec965">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/enoch-chau-a2a522126/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.mountainproject.com/user/200380484/enoch-chau">
          <img className="logo" src="/pics/logos/mountainproject.png" alt="mountain_project"/>
        </a>
      </div>
    </footer>
  );
}