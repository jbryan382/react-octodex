// Do separate components for each cat

import React, { Component } from 'react'
import SurftocatImage from '../images/surftocat.png'

class Surftocat extends Component {
  render() {
    return (
      <>
        <figure>
          <a href="https://octodex.github.com//suftocat">
            <img src={SurftocatImage} alt="Surftocat" />
          </a>
          <div className="triangle" />
          <div className="userphotos">
            <figcaption>#142</figcaption>
            <figcaption>
              the <a href="https://octodex.github.com//suftocat">Surftocat </a>{' '}
              by
            </figcaption>
            <a href="https://github.com/jeejkang">
              <img src="https://github.com/jeejkang.png" alt="jeejkang" />
            </a>
          </div>
        </figure>
      </>
    )
  }
}

export default Surftocat
