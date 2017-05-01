import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Button, Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import About from "./components/About";
import Home from "./components/Home";
import Topics from './components/Topics';
import Contact from './components/Contact';



const App = () => (
  <Router>
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Nav bsStyle="pills" href='/'>Home</Nav>
          </Navbar.Brand>
        </Navbar.Header>
              <Nav>
                <NavDropdown bsStyle="pills" eventKey={1} title="Menu">
                  <LinkContainer to="/about"><MenuItem eventKey={1.1}>About</MenuItem></LinkContainer>
                  <LinkContainer to="/topics"><MenuItem eventKey={1.2}>Topics</MenuItem></LinkContainer>
                  <LinkContainer to="/contact"><MenuItem eventKey={1.3}>Contact Me</MenuItem></LinkContainer>
                </NavDropdown>
              </Nav>
      </Navbar>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/contact" component={Contact}/>

      </div>

  </Router>
)
export default App;
