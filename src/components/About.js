import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col md={6} className="no-padding">
              <div id="about-image-container">
                <img className="about-image" src={require("./../../images/jesmine.jpg")} />
              </div>
            </Col>
            <Col md={6} className="no-padding">
              <div id="personal-info">
                <h2>Damilola Jesmine Omonori</h2>
                <p>Jesmine is a graduate of Electrical Engineering, a cool headed guy who likes to hack on things</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              icons and the likes
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About
