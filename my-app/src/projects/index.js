import React from 'react';
import PropTypes from 'prop-types';
import ProjectSkeleton from './skeleton';
//routing
import {
  HashRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function Projects (props){

  let { path, url } = useRouteMatch();
  
  let cards = [
    {
      img: 'pics/coffee_grams/3d_cg_pcb.png',
      alt: 'coffeeGrams',
      title: 'Coffee Grams',
      text: '2020',
    },

  ]
    
  return(
    <ProjectSkeleton
      cards={cards}
    />
  );
}

export default Projects;
