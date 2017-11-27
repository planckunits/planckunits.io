// @flow

import Link from 'next/link'
import Logo from './Logo'

const Header = () => (
  <header>
    <nav>
      <h1>
        <a href="/" className="brand">
          <Logo />
          <span>PlanckUnits</span>
        </a>
      </h1>
    </nav>
    <style jsx>{`
      .brand {
        display: flex;
      }
      nav {
      }
    `}</style>
    <style jsx global>{`
      body {
        padding: 0;
        margin: 0;
      }
    `}</style>
  </header>
)
export default Header
