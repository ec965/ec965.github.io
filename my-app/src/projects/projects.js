import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProjectPage, ImgFormat, VidFormat } from './page';
import WorkoutApp from './workoutTimer';
//bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


export function CoffeeGrams(){
  return(
    <ProjectPage
      title="Coffee Grams"
      dates="March 2020 - June 2020"
      buttons={[{title: 'GitHub',url: 'https://github.com/ec965/coffee_grams' }]}
      description={<>IoT Coffee Scale PCB design and LAMP stack webapp. <a href="./cg_example/Coffee Grams.html">Click here</a> for a static example of the webapp.</>}
      media={ 
        <>
          <ImgFormat
            img1src="\pics\coffee_grams\cg_pcb.png"
            img2src="\pics\coffee_grams\3d_cg_pcb.png"
            img3src="\pics\coffee_grams\breadboard.JPG"
          />
        </>
      }
    />
  );
}

export function WorkoutTimer(){

  return(
    <ProjectPage
      title="Workout Timer"
      dates="April 2020"
      buttons={[{title: 'GitHub',url: 'https://github.com/ec965/workout_timer' }]}
      media={
        <WorkoutApp/>
      }
    />
  );
}

export function GPSSS(){
  return(
   <ProjectPage
     title="GPS Sound Sensor"
     dates="September 2019 - March 2020"
     buttons={[{title: 'Project Site', url: 'http://projects.eng.uci.edu/projects/2019-2020/gps-sound-sensor-rescue-assistance'}]}
     description={<>The GPSSS is a WiFi connected directional sensor based on the time delay of arrival algorthim for sound. 
       My contributions include configuring WiFi connectivity between the sensor and android application.
       Special thanks to my teammates Minh Tam Chau, Sam Longo, and Kelwin Li.</>}
    media={
      <>
       <VidFormat
         vidsrc="\pics\GPSSS\gpsss_vid.mp4"
        />
        <ImgFormat
          img1head=""
          img1src="\pics\GPSSS\GPSSS_2.jpg"
        />
      </>
     }
    />
  );
}

export function ScaleUp(){
  return(
    <ProjectPage
      title="Scale UP"
      dates="SD Hacks 2019"
      buttons={[
        {title: 'DevPost', url: 'https://devpost.com/software/scale-up'},
        {title: 'GitHub', url:'https://github.com/ec965/smart_scale' },
      ]}
      description={
        <>
          Scale Up can calculate caloric data based on weight of foods. Google Vision was used to find food types while the USDA Nutrition API to find cloric information. Checkout the DevPost for more infromation.
        </>
      }
      media={
        <>
          <VidFormat youtube vidsrc='https://www.youtube.com/embed/G3OunuLPnXA'/>
          <ImgFormat img1src="\pics\scale_up\hardware_all_view_labeled.JPG" img1head=""/>
        </>
      }
    />
  );
}

export function HC2(){
  return(
    <ProjectPage
      title="HC2"
      dates="August 2019 - Novermber 2019"
      buttons={[
        {title: 'GitHub', url: 'https://github.com/ec965/HC2_arduino_python'}
      ]}
      description={<>A prototype IoT network for the Rotronics HC2 Temperature and Humididty sensor. Connections include WiFi, Email, and LoRa.</>}
      media={
        <>
          <ImgFormat img1head="" img1src='\pics\hc2.JPG'/>
        </>
      }
    />
  );
}

export function CingHat(){
  return(
    <ProjectPage
      title="The C-ing Hat"
      dates="Hack UCI 2019"
      buttons={[
        {title: 'DevPost', url: "https://devpost.com/software/the-c-ing-hat"},
        {title: 'GitHub', url: "https://github.com/ec965/the_all_C-ing_eye"}
      ]}
      description={<>A prototype hat for object detection.</>}
      media={
        <>
          <VidFormat vidsrc="https://www.youtube.com/embed/SFQxsU8La4k" youtube/>
          <ImgFormat img1src="\pics\cing_hat\Cing_hat_2019.jpg" img2src='\pics\cing_hat\Cing_hat_2019 (2).jpg' />
        </>
      }
    />
  );
}

export function MicroMouse(){
  return(
    <ProjectPage
      title="MicroMouse"
      dates="January 2019 - March 2019"
      buttons={[
        {title: 'GitHub', url: "https://github.com/ec965/micromouse_2019"}
      ]}
      description={<>MicroMouse is a world wide competition in the promotion of autonomous vehicles. Using IR transcievers to detect distance from walls, the mouse can navigate through a maze using it's microcontroller "brain".</>}
      media={
        <>
          <ImgFormat img1src="\pics\micromouse\micromosue_2019.JPG" img2src="\pics\micromouse\labeled_top_down_micromouse_2019.png"/>
        </>
      }
    />
  );
}
