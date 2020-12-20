import React from 'react';
import AboutPage from './page';

const myPic = {alt: "enoch", src: 'pics/IMG_2745.JPG'};

export default function AboutMe(){
  return(
    <AboutPage
      greeting="Hello!"
      name="I'm Enoch."
      blurb={<>I'm a new grad; I finished my bachelor's in Electrical Engineering at UC Irvine in June 2020. 
      I'm interested in electronics, firmware, web dev, and their baby: IoT. 
      When I'm not in front of the computer, I like to cook, climb rocks, and mess with keyboards.</>}
      email="enoch965@gmail.com"
      mountainproject="https://www.mountainproject.com/user/200380484/enoch-chau"
      linkedin="https://linkedin.com/in/enoch-chau-a2a522126/"
      github="https://github.com/ec965"
      humanpic={myPic}
    />
  );
}
