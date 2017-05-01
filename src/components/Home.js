import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Button, Jumbotron} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Home = () => (
  <div>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <LinkContainer to="/about"><Button bsStyle="primary">About</Button></LinkContainer>
    </Jumbotron>
  </div>
)
module.exports = Home;
