import React from 'react';
import ProjectSkeleton from './skeleton';
import { 
  FKRestoration, 
  CoffeeGrams, 
  WorkoutTimer, 
  GPSSS, 
  ScaleUp, 
  HC2, 
  CingHat, 
  MicroMouse, 
  PolyPhase, 
  ProjectorBuddy, 
  WCBuddy, 
  BoulderField, 
  MacroPad,
  EspTemp,
} from './projects';
//routing
import {
  HashRouter,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
//bootstrap

function Projects (props){

  let { path, url } = useRouteMatch();    
  const projects = [
    {
      url: url + '/esp_temp',
      img: 'pics/iot_temp/perfboard_front.JPG',
      alt: 'esp_temp',
      title: 'Esp Temp',
      text: '2021',
      component: <EspTemp/>,
      axis:"h-image"
    },
    {
      url: url + '/macropad',
      img: 'pics/macropad/pcb-pretty.JPG',
      alt: 'macropad',
      title: 'Macro Pad',
      text: '2020',
      component: <MacroPad/>,
      axis: "h-image"
    },
    {
      url: url + '/fk2001',
      img: 'pics/fk2001/fk-1.JPG',
      alt: 'fk2001',
      title: 'FK-2001 Restoration',
      text: '2020',
      component: <FKRestoration/>,
      axis: "h-image"
    },
    {
      url: url + '/boulderField',
      img: 'pics/boulderField/dataTable.png',
      alt: 'boulderField',
      title: 'Boulder Field',
      text: '2020',
      component: <BoulderField/>,
      axis: "h-image"
    },
    {
      url: url + '/coffeeGrams',
      img: 'pics/coffee_grams/3d_rev2.jpg',
      alt: 'coffeeGrams',
      title: 'Coffee Grams',
      text: '2020',
      component: <CoffeeGrams/>,
      axis: "h-image"
    },
    {
      url: url + '/workoutTimer',
      img: 'pics/wo1.png',
      alt: 'workoutTimer',
      title: 'Workout Timer',
      text: '2020',
      component: <WorkoutTimer/>,
      axis: "h-image"
    },
    {
      url: url + '/GPSSS',
      img: 'pics/GPSSS/GPSSS_1.jpg',
      alt: 'GPSSS',
      title: 'GPS Sound Sensor',
      text: 'Senior Design 2020',
      component: <GPSSS/>,
      axis: "h-image"
    },
    {
      url: url + '/watercoolerbuddy',
      img: '/pics/WCB/wcb_pcb.jpg',
      alt: 'watercoolerbuddy',
      title: 'Water Cooler Buddy',
      text: 'Calplug 2019',
      component: <WCBuddy/>,
      axis: "h-image"
    },
    {
      url: url + '/scaleUp',
      img: 'pics/scale_up/hardware_all_view.JPG',
      alt: "scaleUp",
      title: 'Scale Up',
      text: 'SD Hacks 2019',
      component: <ScaleUp/>,
      axis: "h-image"
    },
    {
      url: url + '/hc2',
      img: 'pics/hc2.JPG',
      alt: 'hc2',
      title: 'HC2: IoT Sensor',
      text: '2019',
      component: <HC2/>,
      axis: "h-image"
    },
    {
      url: url + '/projectorBuddy',
      img: "/pics/projector_buddy/image.png",
      alt: "projectorBuddy",
      title: 'Projector Buddy',
      text: 'Calplug 2019',
      component: <ProjectorBuddy/>,
      axis: "h-image"
    },
    {
      url: url + '/3phasewatt',
      img: '/pics/3phase/3phase_watt_demo.jpg',
      alt: '3phasewatt',
      title: "Poly-Phase Wattmeter",
      text: 'Calplug 2019',
      component: <PolyPhase/>,
      axis: "h-image"
    },
    {
      url: url + '/cingHat',
      img: 'pics/cing_hat/Cing_hat_2019.jpg',
      alt: 'cingHat',
      title: 'The C-ing Hat',
      text: 'Hack UCI 2019',
      component: <CingHat/>,
      axis: "h-image"
    },
    {
      url: url + '/micromouse',
      img: 'pics/micromouse/micromosue_2019.JPG',
      alt: 'micromouse',
      title: 'MicroMouse',
      text: '2019',
      component: <MicroMouse/>,
      axis: "h-image"
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
            <Route key={index} path={project.url}>
              {project.component}
            </Route> )
        ))}
      </Switch>
    </HashRouter>
  );
}

export default Projects;