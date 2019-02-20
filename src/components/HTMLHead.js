import React, { Component } from 'react'

class HTMLHead extends Component {
  render() {
    return (
      <>
        <head lang="en">
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Octodex Remake</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/screen.css" />
        </head>
      </>
    )
  }
}

export default HTMLHead
