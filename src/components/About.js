import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col md={6}>
              <div id="about-image-container">
                <img className="about-image" src={require("./../../images/jesmine.jpg")} />
              </div>
            </Col>
            <Col md={6}>
              <div id="personal-info">Damilola Jesmine Omonori</div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About
