// Do separate components for each cat

import React, { Component } from 'react'
import UmbrellatocatImage from '../images/puddle_jumper.jpg'

class Umbrellatocat extends Component {
  render() {
    return (
      <>
        <figure>
          <a href="https://octodex.github.com//umbrellatocat">
            <img src={UmbrellatocatImage} alt="Umbrellatocat" />
          </a>
          <div className="triangle" />
          <div className="userphotos">
            <figcaption>#144</figcaption>
            <figcaption>
              the
              <a href="https://octodex.github.com//umbrellatocat">
                Umbrellatocat
              </a>
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

export default Umbrellatocat
