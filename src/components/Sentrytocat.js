// Do separate components for each cat

import React, { Component } from 'react'
import SentrytocatImage from '../images/Sentrytocat.jpg'

class Sentrytocat extends Component {
  render() {
    return (
      <>
        <figure>
          <a href="https://octodex.github.com//sentrytocat">
            <img src={SentrytocatImage} alt="Sentrytocat" />
          </a>
          <div className="triangle" />
          <div className="userphotos">
            <figcaption>#145</figcaption>
            <figcaption>
              the
              <a href="https://octodex.github.com//sentrytocat">Sentrytocat</a>
              by
            </figcaption>
            <a href="https://github.com/cameronmcefee">
              <img
                src="https://github.com/cameronmcefee.png"
                alt="cameronmcefee"
              />
            </a>
          </div>
        </figure>
      </>
    )
  }
}

export default Sentrytocat
