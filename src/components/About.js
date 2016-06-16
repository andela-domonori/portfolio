import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={6}>Image
              <img className="about-image" src="./../../images/jesmine.png" />
            </Col>
            <Col md={4}>Personal information</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About
