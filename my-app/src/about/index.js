import React from 'react';
import AboutPage from './page';

const socialIcons=[
  {url: 'https://linkedin.com/in/enoch-chau-a2a522126/', alt: 'linkedin', src:'pics/logos/linkedin.png'},
  {url: 'https://github.com/ec965', alt:'github', src: 'pics/logos/GitHub.png'},
  {url: 'https://www.mountainproject.com/user/200380484/enoch-chau', alt: 'mountainproject', src: 'pics/logos/mountainproject.png'},
];


const myPic = {alt: "enoch", src: 'pics/IMG_2745.JPG'};

export default function AboutMe(){
  return(
    <AboutPage
      title="Hello!"
      greeting="My name is Enoch (pronounced E-knock)"
      blurb={<>I'm a masters student at UC Irvine studying Embedded and Cyber-Physical systems. I did my B.S. in Electrical Engineering there too! 
        I'm interested in the merging of electronics and the internet through IoT. 
        When I'm not in front of the computer, I like to cook and climb rocks.</>}
      email="enoch965@gmail.com"
      icons={socialIcons}
      humanpic={myPic}
    />
  );
}
