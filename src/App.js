import React, { Component } from 'react'
import HTMLHead from './components/HTMLHead'
import GitHubLogo from './components/GitHubLogo'
import NavBar from './components/NavBar'
import Filmtocats from './components/Filmtocats'
import Sentrytocat from './components/Sentrytocat'
import Umbrellatocat from './components/Umbrellatocat'
import Boxertocat from './components/Boxertocat'
import Surftocat from './components/Surftocat'
import Hulatocat from './components/Hulatocat'
import Scubatocat from './components/Scubatocat'
import Vinyltocat from './components/Vinyltocat'
import FooterNav from './components/FooterNav'

class App extends Component {
  render() {
    return (
      <>
        <html>
          <HTMLHead />
          <body>
            <section>
              <GitHubLogo />
              <NavBar />
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
              <FooterNav />
            </main>
          </body>
        </html>
      </>
    )
  }
}

export default App
