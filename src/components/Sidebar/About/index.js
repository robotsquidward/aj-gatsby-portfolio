import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A mobile developer enthusiastic about design, documentation, and building static sites in Jekyll and Gatsby JS.
          <div className="emoji">
            🤖 &nbsp;🏔&nbsp;🎨&nbsp; ⚽️
          </div>
        </div>
      </div>
    )
  }
}

export default About
