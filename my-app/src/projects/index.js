import React from 'react';
import PropTypes from 'prop-types';
import ProjectSkeleton from './skeleton';
import { CoffeeGrams, WorkoutTimer, GPSSS, ScaleUp, HC2, CingHat, MicroMouse } from './projects';
//routing
import {
  HashRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
//bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'


function Projects (props){

  let { path, url } = useRouteMatch();    
  const projects = [
    {
      url: 'https://ec965.github.io/MP-Recs/index.html',
      anchor: true, 
      img: 'pics/boulderField.png',
      alt: 'boulderField',
      title: 'Boulder Field',
      text: '2020',
    },
    {
      url: url + '/coffeeGrams',
      img: 'pics/coffee_grams/3d_cg_pcb.jpg',
      alt: 'coffeeGrams',
      title: 'Coffee Grams',
      text: '2020',
      component: <CoffeeGrams/>,
    },
    {
      url: url + '/workoutTimer',
      img: 'pics/wo1.png',
      alt: 'workoutTimer',
      title: 'Workout Timer',
      text: '2020',
      component: <WorkoutTimer/>
    },
    {
      url: url + '/GPSSS',
      img: 'pics/GPSSS/GPSSS_1.jpg',
      alt: 'GPSSS',
      title: 'GPS Sound Sensor',
      text: 'Senior Design 2020',
      component: <GPSSS/>
    },
    {
      url: url + '/scaleUp',
      img: 'pics/scale_up/hardware_all_view.JPG',
      alt: "scaleUp",
      title: 'Scale Up',
      text: 'SD Hacks 2019',
      component: <ScaleUp/>
    },
    {
      url: url + '/hc2',
      img: 'pics/hc2.JPG',
      alt: 'hc2',
      title: 'HC2: IoT Environment Sensor',
      text: '2019',
      component: <HC2/>
    },
    {
      url: url + '/cingHat',
      img: 'pics/cing_hat/Cing_hat_2019.jpg',
      alt: 'cingHat',
      title: 'The C-ing Hat',
      text: 'Hack UCI 2019',
      component: <CingHat/>
    },
    {
      url: url + '/micromouse',
      img: 'pics/micromouse/micromosue_2019.JPG',
      alt: 'micromouse',
      title: 'MicroMouse',
      text: '2019',
      component: <MicroMouse/>
    }

  ];

  return(
    <HashRouter>
      {/* Links are in the cards in the skeleton */}
       <Switch>
        <Route exact path={path}>
          <ProjectSkeleton
            cards={projects}
          />
        </Route>
        {/* redirect boulderField to the webapp. 
        This doesn't need a route as it is an external webapge*/}
        {projects.map((project, index) => (
          project.anchor ? null : (
            <Route key={index} path={path + '/' + project.alt}>
              {project.component}
            </Route> )
        ))}
      </Switch>
    </HashRouter>
  );
}

export default Projects;
