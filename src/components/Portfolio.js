import React, {Component} from 'react'
import {Grid, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router'
import {browserHistory} from 'history'

class Portfolio extends Component {
  render() {
    let list = [
        {
          name: 'Letterer',
          caption: 'A game that will strecth your mind'
        },
        {
          name: 'ChessMe',
          caption: 'Learn to play with the grandmasters'
        },
        {
          name: 'Scmobile',
          caption: 'A mobile app for the saints community church to get latest messages and the likes'
        }
    ]
    return (
      <div>
        <Grid fluid>
          <Row>
            {
              list.map((item, index) => (
                <Col
                  key={index}
                  className={`portfotio-grid-${index} no-padding`} md={4}>
                  <Col md={12}>
                    <div className="class-with-pad">
                      <img src={require("./../../images/jesmine.jpg")} />
                      <div className="portfolio-overlay">
                        <div id="overlay-caption">
                          <h4>{item.name}</h4>
                          <p>{item.caption}</p>
                        </div>
                        <p id="overlay-content">
                          To play the game move the alphabets one after the other. The winner wins
                        </p>
                      </div>
                    </div>
                  </Col>
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
