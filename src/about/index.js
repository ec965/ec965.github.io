import React from 'react';
import {Row, Column} from '../components/layout';
import PageFramework from '../components/framework.js';
import Pdf from '../components/pdf';

const About = (props) => {
  return(
    <Column>
      <PageFramework
        title="Hello!"
        subtitle="I'm Enoch"
        media={[{img:'pics/IMG_2745.JPG', text: 'Red Rock, Las Vegas, NV 2019'}]}
        icons={<Icons/>}
      >
        <p>
          I'm interested in electronics, firmware, web dev, and IoT. 
          I finished my bachelor's in Electrical Engineering at UC Irvine in June 2020. 
          When I'm not in front of the computer, I like to cook, climb rocks, and mess with keyboards.
        </p>
      </PageFramework>
      <Pdf src='/public_resume.pdf'/>
    </Column>
  );
}

const Icons = (props) => {
  return(
    <Row>
      <a href="https://github.com/ec965">
        <i className="footer-logo fab fa-github"/>
      </a>
      <a href="https://linkedin.com/in/enoch-chau-a2a522126">
        <i className="footer-logo fab fa-linkedin-in"/>
      </a>
      <a href="https://www.mountainproject.com/user/200380484/enoch-chau">
        <img className="footer-logo" src="/pics/logos/mountainproject.png" alt="mountain_project"/>
      </a>
      <a href={'mailto:' + props.email} className="courier">enoch965@gmail.com</a>
    </Row>
  );
}

export default About;