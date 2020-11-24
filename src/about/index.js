import React from 'react';
import AboutPage from './page';

const myPic = {alt: "enoch", src: 'pics/IMG_2745.JPG'};

export default function AboutMe(){
  return(
    <AboutPage
      greeting="Hello!"
      name="I'm Enoch."
      blurb={<>I'm a masters student at UC Irvine studying Embedded and Cyber-Physical systems. 
        I completed my B.S. at UCI in Electrical Engineering. 
        I'm interested in the merging of electronics and the internet through IoT. 
        When I'm not in front of the computer, I like to cook and climb rocks.</>}
      email="enoch965@gmail.com"
      mountainproject="https://www.mountainproject.com/user/200380484/enoch-chau"
      linkedin="https://linkedin.com/in/enoch-chau-a2a522126/"
      github="https://github.com/ec965"
      humanpic={myPic}
    />
  );
}
