import React from 'react';
import ReactDOM from 'react-dom';
//css
import './css/bootstrap.css';
import './css/index.css';
import './css/myStyle.css';
//fonts
import './font/stylesheet.css';
//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//routing
import {
  HashRouter,
  Route,
  Link,
  Switch
} from "react-router-dom";
//myStuff
import Home from './home/index';
import Project from './projects/index';

function App (props){
  return(
    <HashRouter>
      <Navbar>
        <Link to="/">
          <Navbar.Brand>Enoch Chau</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/projects">
                Projects
              </Link>
            </Nav.Link>
            {/* <Link to="/research"> */}
            {/*   <Nav.Link >Research</Nav.Link> */}
            {/* </Link> */}
            {/* <Link to="/about"> */}
            {/*   <Nav.Link >About</Nav.Link> */}
            {/* </Link> */}
            {/* <Link to="/resume"> */}
            {/*   <Nav.Link>Resume</Nav.Link> */}
            {/* </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route path="/projects">
          <Project/>
        </Route>
        
        {/* <Route path="/research"> */}
        {/*   <Research /> */}
        {/* </Route> */}
        
        {/* <Route path="/about"> */}
        {/*   <About /> */}
        {/* </Route> */}
        
        {/* <Route path="/resume"> */}
        {/*   <Resume/> */}
        {/* </Route> */}
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
