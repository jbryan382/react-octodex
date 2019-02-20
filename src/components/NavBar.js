import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <>
        <nav>
          <ul className="navbuttons">
            <li>
              <a
                href="http://feeds.feedburner.com/Octocats"
                className="navhover"
              >
                RSS
              </a>
            </li>
            <li>
              <a
                href="https://octodex.github.com/faq.html"
                className="navhover"
              >
                FAQ
              </a>
            </li>
            <li>
              <a href="https://github.com/" className="navhover">
                Back to GitHub
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default NavBar
