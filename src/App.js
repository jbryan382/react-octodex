import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'

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
              <header>
                <a href="https://octodex.github.com/">
                  <img
                    class="logo"
                    src="/images/githublogo.png"
                    alt="Githublogo"
                  />
                </a>
              </header>

              <nav>
                <ul class="navbuttons">
                  <li>
                    <a
                      href="http://feeds.feedburner.com/Octocats"
                      class="navhover"
                    >
                      RSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://octodex.github.com/faq.html"
                      class="navhover"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" class="navhover">
                      {' '}
                      Back to GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <main>
              <figure>
                <a href="https://octodex.github.com//filmtocats">
                  <img src="/images/filmtocats.png" alt="Filmtocats" />
                </a>
                <div class="triangle" />
                <div class="userphotos">
                  <figcaption>#146</figcaption>
                  <figcaption>
                    the
                    <a href="https://octodex.github.com//filmtocats">
                      Filmtocats
                    </a>{' '}
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
              <figure>
                <a href="https://octodex.github.com//sentrytocat">
                  <img src="/images/Sentrytocat.jpg" alt="Sentrytocat" />
                </a>
                <div class="triangle" />
                <div class="userphotos">
                  <figcaption>#145</figcaption>
                  <figcaption>
                    the
                    <a href="https://octodex.github.com//sentrytocat">
                      Sentrytocat
                    </a>{' '}
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
              <figure>
                <a href="https://octodex.github.com//umbrellatocat">
                  <img src="/images/puddle_jumper.jpg" alt="Puddle_Jumper" />
                </a>
                <div class="triangle" />
                <div class="userphotos">
                  <figcaption>#144</figcaption>
                  <figcaption>
                    the
                    <a href="https://octodex.github.com//umbrellatocat">
                      Umbrellatocat
                    </a>
                    by
                  </figcaption>
                  <a href="https://github.com/rubyjazzy">
                    <img
                      src="https://github.com/rubyjazzy.png"
                      alt="rubyjazzy"
                    />
                  </a>
                </div>
              </figure>
              <figure>
                <a href="https://octodex.github.com//boxertocat">
                  <img src="/images/boxertocat.jpg" alt="Boxertocat" />
                </a>
                <div class="triangle" />
                <div class="userphotos">
                  <figcaption>#143</figcaption>
                  <figcaption>
                    the
                    <a href="https://octodex.github.com//boxertocat">
                      Boxertocat
                    </a>{' '}
                    by
                  </figcaption>
                  <a href="https://github.com/rubyjazzy">
                    <img
                      src="https://github.com/rubyjazzy.png"
                      alt="rubyjazzy"
                    />
                  </a>
                </div>
              </figure>
              <figure>
                <a href="https://octodex.github.com//suftocat">
                  <img src="/images/surftocat.png" alt="Surftocat" />
                </a>
                <div class="triangle" />
                <div class="userphotos">
                  <figcaption>#142</figcaption>
                  <figcaption>
                    the{' '}
                    <a href="https://octodex.github.com//suftocat">
                      Surftocat{' '}
                    </a>{' '}
                    by
                  </figcaption>
                  <a href="https://github.com/jeejkang">
                    <img src="https://github.com/jeejkang.png" alt="jeejkang" />
                  </a>
                </div>
              </figure>
              <figure>
                <a href="https://octodex.github.com//hulatocat">
                  <img src="/images/hula_loop.gif" alt="Hulatocat" />
                </a>
                <div class="triangle" />
                <div class="userphotos">
                  <figcaption>#141</figcaption>
                  <figcaption>
                    the
                    <a href="https://octodex.github.com//hulatocat">
                      Hulatocat{' '}
                    </a>{' '}
                    by
                  </figcaption>
                  <a href="https://github.com/heyhayhay">
                    <img
                      src="https://github.com/heyhayhay.png"
                      alt="heyhayhay"
                    />
                  </a>
                </div>
              </figure>
              <figure>
                <a href="https://octodex.github.com//scubatocat">
                  <img src="/images/scubatocat.png" alt="Scubatocat" />
                </a>
                <div class="triangle" />
                <div class="userphotos">
                  <figcaption>#140</figcaption>
                  <figcaption>
                    the
                    <a href="https://octodex.github.com//scubatocat">
                      Scubatocat
                    </a>{' '}
                    by
                  </figcaption>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      alt="cameronfoxly"
                    />
                  </a>
                </div>
              </figure>
              <figure>
                <a href="https://octodex.github.com//vinyltocat">
                  <img src="/images/vinyltocat.png" alt="Vinyltocat" />
                </a>
                <div class="triangle" />
                <div class="userphotos">
                  <figcaption>#139</figcaption>
                  <figcaption>
                    the
                    <a href="https://octodex.github.com//vinyltocat">
                      Vinyltocat{' '}
                    </a>
                    by
                  </figcaption>
                  <a href="https://github.com/suziejurado">
                    <img
                      src="https://github.com/suziejurado.png"
                      alt="suziejurado"
                    />
                  </a>
                </div>
              </figure>

              <footer>
                <a href="http://feeds.feedburner.com/Octocats">
                  {' '}
                  <p>RSS</p>
                </a>
                <a href="https://octodex.github.com/faq.html">
                  {' '}
                  <p>FAQ</p>
                </a>
                <a href="https://github.com/">
                  <img src="/images/logo.png" alt="logo" class="logolink" />
                </a>
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
