// Do separate components for each cat

import React, { Component } from 'react'
import FilmtocatImage from '../images/filmtocats.png'

class Filmtocats extends Component {
  render() {
    return (
      <>
        <figure>
          <a href="https://octodex.github.com//filmtocats">
            <img src={FilmtocatImage} alt="Filmtocat" />
          </a>
          <div className="triangle" />
          <div className="userphotos">
            <figcaption>#146</figcaption>
            <figcaption>
              the
              <a href="https://octodex.github.com//filmtocats">Filmtocats</a>
              by
            </figcaption>
            <a href="https://github.com/heyhayhay">
              <img
                src="https://avatars3.githubusercontent.com/u/20049049?v=4"
                alt="Hayhayhay"
              />
            </a>
          </div>
        </figure>
      </>
    )
  }
}

export default Filmtocats
