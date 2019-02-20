import React, { Component } from 'react'
import GitHubLogoImg from '../images/githublogo.png'

class GitHubLogo extends Component {
  render() {
    return (
      <>
        <header>
          <a href="https://octodex.github.com/">
            <img className="logo" src={GitHubLogoImg} alt="Githublogo" />
          </a>
        </header>
      </>
    )
  }
}

export default GitHubLogo
