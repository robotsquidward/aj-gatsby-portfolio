import React, { Component } from 'react'

import './style.scss'
import { withPrefix } from 'gatsby-link'

class DesignUnit extends Component {
  render() {
    return (
      <div className="design-unit col-xs-12 col-sm-6 col-md-4">
        <a href={this.props.link} target="_blank">
          <div
            className="image"
            style={{
              backgroundImage: `url(${withPrefix(this.props.logo)})`,
              backgroundColor: this.props.colour
          }}/>
        </a>
        <div className="title">
          {this.props.title}
        </div>
        <div className="time-period">
          {this.props.timeperiod}
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>
      </div>
    )
  }
}

export default DesignUnit
