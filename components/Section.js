// @flow

import React, { Children } from 'react'

type Props = { children?: any, name?: string }

const Layout = ({ children, name = 'Section' }: Props) => (
  <div>
    <section>
      <div>
        <h2>{name}</h2>
        {children}
      </div>
    </section>

    <style jsx>{`
      h2 {
        align-text: center;
      }
      section {
        width: 600px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Layout
