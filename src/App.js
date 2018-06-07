import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'
import years from './years'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Grid>
          <Row>
            <Col xs={ 12 }>
              <h1>100 Years of VR</h1>
            </Col>
          </Row>
        </Grid>

        <Grid className="content-list">
          <Row>
            <Col xs={ 12 }>
              {
                years.map((d,i) => {
                  return (<Link key={ i } to={ 'years/' + (i + 1) }>Year { i+1 }: { d.name }</Link>)
                })
              }
            </Col>
          </Row>
        </Grid>

        <footer>
          <Grid>
            <Row>
              <Col xs={ 12 }>
                Copyright 2018 Tyler Wolf
              </Col>
            </Row>
          </Grid>
        </footer>

      </div>
    );
  }
}

export default App;
