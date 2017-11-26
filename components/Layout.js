// @flow

import React from 'react'
import Head from 'next/head'
import Header from './Header'

type Props = { children?: React.Element<*>, title?: string }

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

    <footer>{'I`m here to stay'}</footer>
  </div>
)

export default Layout
