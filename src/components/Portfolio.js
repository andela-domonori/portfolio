import React, {Component} from 'react'
import {Grid, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router'
import {browserHistory} from 'history'

class Portfolio extends Component {
  render() {
    let list = ['Letterer', 'ChessMe', 'Scmobile']
    return (
      <div>
        <Grid  fluid>
          <Row>
            {
              list.map((item, index) => (
                <Col
                  key={index}
                  className={`portfotio-grid-${index}`} md={4}>
                  <div className="class-with-pad">
                    <img src={require("./../../images/jesmine.jpg")} />
                    <div className="portfolio-overlay">{item}</div>
                  </div>
                </Col> )
                )
            }
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Portfolio
