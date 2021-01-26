import React from 'react';
import {NavBar, NavGroup, NavLogo, NavItem} from '../components/navbar.js';
import {FooterGroup, Footer} from '../components/footer.js';
import Main from '../projects/index.js';
import About from '../about/index.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

const MyNav = (props) => {
  return(
    <NavBar>
      <NavLogo>
        <Link to="/"><h3>Enoch Chau</h3></Link>
      </NavLogo>

      <NavGroup>
        <NavItem>
          <Link to="/about"><h4>About</h4></Link>
        </NavItem>
        <NavItem>
          <Link to="/gallery"><h4>Gallery</h4></Link>
        </NavItem>
      </NavGroup>

    </NavBar>
  );
}

const MyBody = (props) => {
  return(
    <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/gallery">
        <h1>hi2</h1>
      </Route>
      <Route path="/">
        <Main/>
      </Route>
    </Switch>
  );
}

const MyFooter = (props) => {
  return(
    <Footer>
      <FooterGroup className='right'>
        <a className="footer-text" href="https://github.com/ec965/ec965.github.io">View this site's source code.</a>
      </FooterGroup>
      <FooterGroup>
        <p className="footer-text">© Enoch Chau 2021</p>
      </FooterGroup>
      <FooterGroup className="left">
        <a href="https://github.com/ec965">
          <i className="footer-logo fab fa-github"/>
        </a>
        <a href="https://www.linkedin.com/in/enoch-chau-a2a522126/">
          <i className="footer-logo fab fa-linkedin-in"/>
        </a>
      </FooterGroup>
    </Footer>
  );
}
const App = (props) => {
  return(
    <Router>
      <MyNav/>
      <MyBody/>
      <MyFooter/>
    </Router>
  );
}

export default App;