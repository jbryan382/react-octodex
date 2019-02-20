import React, { Component } from 'react'
import Filmtocats from './components/Filmtocats'
import Sentrytocat from './components/Sentrytocat'
import Umbrellatocat from './components/Umbrellatocat'
import Boxertocat from './components/Boxertocat'
import Surftocat from './components/Surftocat'
import Hulatocat from './components/Hulatocat'
import Scubatocat from './components/Scubatocat'
import Vinyltocat from './components/Vinyltocat'
import GitHubLogo from './components/GitHubLogo'
import GitHubBadge from './components/GitHubBadge'

class App extends Component {
  render() {
    return (
      <>
        <html>
          <head lang="en">
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Octodex Remake</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="/screen.css" />
          </head>
          <body>
            <section>
              <GitHubLogo />

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
            </section>
            <main>
              <Filmtocats />
              <Sentrytocat />
              <Umbrellatocat />
              <Boxertocat />
              <Surftocat />
              <Hulatocat />
              <Scubatocat />
              <Vinyltocat />
              <footer>
                <a href="http://feeds.feedburner.com/Octocats">
                  <p>RSS</p>
                </a>
                <a href="https://octodex.github.com/faq.html">
                  <p>FAQ</p>
                </a>
                <GitHubBadge />
                <p>© 2013 – 2019 GitHub, Inc. All rights reserved</p>
              </footer>
            </main>
          </body>
        </html>
      </>
    )
  }
}

export default App
