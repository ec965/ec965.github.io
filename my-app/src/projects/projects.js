import React from 'react';
import ProjectPage from './page';
//bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export function CoffeeGrams(){
  return(
    <ProjectPage
      title="Coffee Grams"
      dates="March 2020 - June 2020"
      buttons={[{title: 'Github',url: 'https://github.com/ec965/coffee_grams' }]}
      description={<>IoT Coffee Scale PCB design and LAMP stack webapp. <a href="./cg_example/Coffee Grams.html">Click here</a> for a static example.</>}
      media={
        <>
          <Row> 
            <Col>
              <h5 className="image_heading">PCB</h5>
              <Image className="project" src="\pics\coffee_grams\cg_pcb.png" fluid/>
            </Col>
            <Col>
              <h5 className="image_heading">PCB</h5>
              <Image className="project" src="\pics\coffee_grams\3d_cg_pcb.png" fluid/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="image_heading">Raspberry Pi Bread Board Prototype</h5>
              <Image className="project" src="\pics\coffee_grams\breadboard.JPG" fluid/>
            </Col>
          </Row>
        </>
      }
    />
  );
}

export function Redirect(){
  return(
    <ProjectPage
      title="Redirecting..."/>
  );
}
export function WorkoutTimer(){
  return(
    <ProjectPage
      title="Workout Timer"
      dates="April 2020"
      buttons={[{title: 'Github',url: 'https://github.com/ec965/workout_timer' }]}
      media={
        <>
          <Row> 
           {/* might have to remake this webapp... */} 
          </Row>
        </>
      }
    />
  );
}
