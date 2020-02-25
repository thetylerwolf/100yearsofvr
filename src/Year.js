import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'

import './Year.css'

class Year extends Component {
  render() {

    return (
      <div className="Year">

        <iframe
          src={ 'https://thetylerwolf.github.io/3dyears/' + this.props.match.params.year + (this.props.location.search || '') }
          frameBorder="0"
          style={{
            'overflow':'hidden',
            'height':'100%',
            'width':'100%'
          }}
          height="100%"
          width="100%"
          allowFullScreen={true}>
        </iframe>

        <footer>
          <Grid>
            <Row>
              <Col xs={ 12 }>
                Copyright { 1900 + (new Date()).getYear() } Tyler Wolf
              </Col>
            </Row>
          </Grid>
        </footer>

      </div>
    )

  }
}

export default Year;
