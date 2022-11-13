import * as React from "react"
import {Helmet} from "react-helmet"
import "@fontsource/audiowide"
import './index.css'

export default function Home() {
  return <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Stob.art</title>
      <link rel="canonical" href="https://stob.art" />
      <a rel="me" href="https://mastodon.green/@joel"></a>
    </Helmet>
    <div className="container">
      <h1>Stob.art</h1>
      <section id="joel">
        <a rel="me" href="https://mastodon.green/@joel">Mastodon</a>
      </section>
    </div>
  </div>
}
