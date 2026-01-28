import Head from 'next/head'
import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import NetworkBackground from './NetworkBackground'

type Props = {
  title?: string
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="app-container">
    <Head>
      <title>PlanckUnits - Quantum Tech Venture</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="株式会社プランクユニッツ - 最先端技術で未来を創造するベンチャー企業"
      />

      <meta property="og:title" content="株式会社プランクユニッツ" />
      <meta
        property="og:description"
        content="株式会社プランクユニッツ - 最先端技術で未来を創造するベンチャー企業"
      />
      <meta name="format-detection" content="telephone=no" />

      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      />
    </Head>

    <NetworkBackground />
    <Header />

    <style jsx>{`
      .app-container {
        position: relative;
        min-height: 100vh;
        background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
      }

      section {
        align-items: center;
        display: flex;
        height: 50vh;
        justify-content: center;
      }
    `}</style>

    <div style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </div>

    <Footer />
  </div>
)

export default Layout
