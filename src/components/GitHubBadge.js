import React, { Component } from 'react'
import GitHubBadgeImg from '../images/logo.png'

class GitHubBadge extends Component {
  render() {
    return (
      <>
        <a href="https://github.com/">
          <img src={GitHubBadgeImg} alt="logo" className="logolink" />
        </a>
      </>
    )
  }
}

export default GitHubBadge
