// Do separate components for each cat

import React, { Component } from 'react'
import HulatocatImage from '../images/hula_loop.gif'

class Hulatocat extends Component {
  render() {
    return (
      <>
        <figure>
          <a href="https://octodex.github.com//hulatocat">
            <img src={HulatocatImage} alt="Hulatocat" />
          </a>
          <div className="triangle" />
          <div className="userphotos">
            <figcaption>#141</figcaption>
            <figcaption>
              the
              <a href="https://octodex.github.com//hulatocat">Hulatocat </a> by
            </figcaption>
            <a href="https://github.com/heyhayhay">
              <img src="https://github.com/heyhayhay.png" alt="heyhayhay" />
            </a>
          </div>
        </figure>
      </>
    )
  }
}

export default Hulatocat
