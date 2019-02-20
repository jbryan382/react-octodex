// Do separate components for each cat

import React, { Component } from 'react'
import VinyltocatImage from '../images/vinyltocat.png'

class Vinyltocat extends Component {
  render() {
    return (
      <>
        <figure>
          <a href="https://octodex.github.com//vinyltocat">
            <img src={VinyltocatImage} alt="Vinyltocat" />
          </a>
          <div className="triangle" />
          <div className="userphotos">
            <figcaption>#139</figcaption>
            <figcaption>
              the
              <a href="https://octodex.github.com//vinyltocat">Vinyltocat </a>
              by
            </figcaption>
            <a href="https://github.com/suziejurado">
              <img src="https://github.com/suziejurado.png" alt="suziejurado" />
            </a>
          </div>
        </figure>
      </>
    )
  }
}

export default Vinyltocat
