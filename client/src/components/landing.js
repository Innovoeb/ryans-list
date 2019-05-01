import React, { Component } from 'react'
import Header from './header'
import Background from './background'
import Neighborhood from './neighborhood-directory'

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Background />
        <Neighborhood />
      </div>
    )
  }
}

export default Landing
