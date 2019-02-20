import React, { Component } from 'react'
import GitHubBadgeImg from '../images/logo.png'

class FooterNav extends Component {
  render() {
    return (
      <>
        <footer>
          <a href="http://feeds.feedburner.com/Octocats">
            <p>RSS</p>
          </a>
          <a href="https://octodex.github.com/faq.html">
            <p>FAQ</p>
          </a>
          <a href="https://github.com/">
            <img src={GitHubBadgeImg} alt="logo" className="logolink" />
          </a>
          <p>© 2013 – 2019 GitHub, Inc. All rights reserved</p>
        </footer>
      </>
    )
  }
}

export default FooterNav
