// @flow
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const Header = () => (
  <header>
    <nav>
      <h1>
        <a href="/">
          <Logo />
        </a>
      </h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  </header>
)
export default Header
