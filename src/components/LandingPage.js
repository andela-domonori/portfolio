import React, {Component} from 'react'
import {Grid, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router'
import {browserHistory} from 'history'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col className="portfotio-grid" md={4}>Letterer</Col>
            <Col className="portfotio-grid" md={4}>ChessMe</Col>
            <Col className="portfotio-grid" md={4}>Scmobile</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default LandingPage
