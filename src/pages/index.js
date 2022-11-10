import * as React from "react"
import {Helmet} from "react-helmet"
import "@fontsource/audiowide"

export default function Home() {
  return <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Stob.art</title>
      <link rel="canonical" href="https://stob.art" />
      <link rel="stylesheet" type="text/css" href="style.css"/>
      <link rel="me" href="https://mastodon.green/@joel"/>
    </Helmet>
    <div className="container">
      <h1>Stob.art</h1>
    </div>
  </div>
}
