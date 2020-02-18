import Head from 'next/head'
import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = { title?: string }

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Head>
      <title>PlanckUnits</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="株式会社プランクユニッツの会社概要を掲載しています。"
      />

      <meta property="og:title" content="株式会社プランクユニッツ" />
      <meta
        property="og:description"
        content="株式会社プランクユニッツの会社概要を掲載しています。"
      />
      <meta name="format-detection" content="telephone=no" />

      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      />
    </Head>
    <Header />
    <style jsx>{`
      section {
        align-items: center;
        display: flex;
        height: 50vh;
        justify-content: center;
      }
    `}</style>

    {children}

    <Footer />
  </div>
)

export default Layout
