import React from 'react';
import ReactDOM from 'react-dom';
//css
import './css/bootstrap.css';
import './css/myStyle.css';
//fonts
import './font/stylesheet.css';
//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
//routing
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
//myStuff
import Home from './home/index';
import Project from './projects/index';
import ScrollToTop from './utility/scrollup';
import AboutMe from './about/index';
import Resume from './resume/index';


function App (props){
  return(
    <HashRouter>
      <ScrollToTop/>
      <Navbar bg="light" variant="light" expand="md">
        <LinkContainer to="/">
          <Navbar.Brand>Enoch Chau</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/projects">
              <Nav.Link>
                  Projects
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link >About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/projects">
          <Project/>
          <footer class="sourcecode">
            <a class="myFoot" href="https://github.com/ec965/ec965.github.io">View this site's source code.</a>
          </footer>
        </Route>

        <Route path="/about">
          <AboutMe/>
        </Route>

        <Route path="/resume">
          <Resume/>
        </Route>
      </Switch>
      <div style={{margin: '24px'}}/>

    </HashRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
