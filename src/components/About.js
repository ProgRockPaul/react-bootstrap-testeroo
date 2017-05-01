import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from 'react-bootstrap';



const About = () => (
  <div>
    <h2>About</h2>
    <LinkContainer to="/"><Button bsStyle="primary">Home</Button></LinkContainer>

  </div>
)

export default About;
