import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col md={6} className="about-me-box no-padding">
              <div id="about-image-container">
                <img className="about-image" src={require("./../../images/jesmine.jpg")} />
              </div>
            </Col>
            <Col md={6} className="about-me-box no-padding">
              <div id="personal-info">
                <h3>Damilola Jesmine Omonori</h3>
                <h4>Javascript Expert</h4>
                <p>
                  Jesmine is a graduate of Electrical and Electronics Engineering, a cool headed guy who likes to hack on things
                  Jesmine knows about functional programming, Internet of Things and all the likes.
                  In his spare time he likes to play chess and tennis
                  Jesmine is looking for an opportunity in front-end web development and looking at improving at algorithms and data-
                  structure. More so Jesmine's favourtie stack is javascript especially in combination with the react and react-native library

                </p>
                <div id="badges">
                  <h4>Badges</h4>
                  <div id="badge-icons">
                    <div style={{borderColor: 'yellow'}}><img src={require("./../../images/badges/javascript.png")} /></div>
                    <div style={{borderColor: 'tomatoe'}}><img src={require("./../../images/badges/rubyonrails.png")} /></div>
                    <div style={{
                      borderColor: 'light-blue',
                      backgroundColor: 'black'
                    }}>
                      <img src={require("./../../images/badges/react.png")} />
                    </div>
                    <div style={{borderColor: 'grey'}}><img src={require("./../../images/badges/python.png")} /></div>
                    <div style={{borderColor: 'blue'}}><img src={require("./../../images/badges/angular.png")} /></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              More details about yourself
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              Stay connected
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About
