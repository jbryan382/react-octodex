// Do separate components for each cat

import React, { Component } from 'react'
import BoxertocatImage from '../images/boxertocat.jpg'

class Boxertocat extends Component {
  render() {
    return (
      <>
        <figure>
          <a href="https://octodex.github.com//boxertocat">
            <img src={BoxertocatImage} alt="Boxertocat" />
          </a>
          <div className="triangle" />
          <div className="userphotos">
            <figcaption>#143</figcaption>
            <figcaption>
              the
              <a href="https://octodex.github.com//boxertocat">Boxertocat</a>
              by
            </figcaption>
            <a href="https://github.com/rubyjazzy">
              <img src="https://github.com/rubyjazzy.png" alt="rubyjazzy" />
            </a>
          </div>
        </figure>
      </>
    )
  }
}

export default Boxertocat
