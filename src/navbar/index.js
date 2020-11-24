import React from 'react';
import {NavBar, NavLink, NavLogo} from './nav.js'
//routing
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
//pages
import Home from '../home/index';
import Project from '../projects/index';
import ScrollToTop from '../utility/scrollup';
import AboutMe from '../about/index';
import Resume from '../resume/index';
import Fun from '../fun/index';
import Footer from './footer.js';

export default function Navigation(props){
  return(
    <HashRouter>
      <ScrollToTop/>
      <NavBar>
        <NavLogo link="/" name="Enoch Chau"/>
        <div>
          <NavLink link="/projects" name="Projects"/>
          <NavLink link="/about" name="About"/>
          <NavLink link="/resume" name="Resume"/>
          <NavLink link="/gallery" name="Gallery"/>
        </div>
      </NavBar>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/projects">
          <Project/>
          <Footer/>
        </Route>
        
        <Route path="/gallery">
          <Fun/>
          <Footer/>
        </Route>

        <Route path="/about">
          <AboutMe/>
        </Route>

        <Route path="/resume">
          <Resume/>
          <Footer/>
        </Route>
      </Switch>
      <div style={{margin: '24px'}}/>
    </HashRouter>
  );
}