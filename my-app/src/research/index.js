import React from 'react';
import ProjectSkeleton from '../projects/skeleton';
import{
  HashRouter,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

function Research(props){
  let { path, url } = useRouteMatch();

  const research = [
    {
      url: url+'/'
    }
  ]
}
