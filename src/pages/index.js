import * as React from "react"
import {Helmet} from "react-helmet"
import "@fontsource/audiowide"
import './index.css'
import background from '../images/background.webp'
import logo from '../images/logo.png'

export default function Home() {
  return <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Stob.art</title>
      <link rel="canonical" href="https://stob.art" />
    </Helmet>
    <div className="container" style={{ backgroundImage: `url("${background}")`, backgroundSize: `contain` }}>
      <h1><img alt={"Stob.art"} width={"400px"} style={{marginLeft:"100px"}} src={logo}/></h1>
      <section id="joel">
        <h2>Joel</h2>
        <a rel="me" title={"Mastodon"} href="https://mastodon.green/@joel">on mastodon</a>
      </section>
    </div>
  </div>
}
