// Do separate components for each cat

import React, { Component } from 'react'
import ScubatocatImage from '../images/scubatocat.png'

class Scubatocat extends Component {
  render() {
    return (
      <>
        <figure>
          <a href="https://octodex.github.com//scubatocat">
            <img src={ScubatocatImage} alt="Scubatocat" />
          </a>
          <div className="triangle" />
          <div className="userphotos">
            <figcaption>#140</figcaption>
            <figcaption>
              the
              <a href="https://octodex.github.com//scubatocat">Scubatocat</a> by
            </figcaption>
            <a href="https://github.com/cameronfoxly">
              <img
                src="https://github.com/cameronfoxly.png"
                alt="cameronfoxly"
              />
            </a>
          </div>
        </figure>
      </>
    )
  }
}

export default Scubatocat
