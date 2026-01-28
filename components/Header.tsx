import Link from 'next/link'
import Logo from './Logo'

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a className="brand">
          <Logo />
          <span>PlanckUnits</span>
        </a>
      </Link>
    </nav>
    <style jsx>{`
      header {
        position: sticky;
        top: 0;
        background: rgba(10, 14, 39, 0.8);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        z-index: 100;
        border-bottom: 1px solid rgba(0, 240, 255, 0.2);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      nav {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: var(--space-4) var(--space-4);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        text-decoration: none;
        color: var(--color-accent-cyan);
        font-weight: 700;
        font-size: var(--text-lg);
        transition: all var(--transition-normal);
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
      }

      .brand:hover {
        color: var(--color-accent-pink);
        text-shadow: 0 0 15px rgba(255, 0, 110, 0.6);
        transform: translateY(-2px);
      }

      span {
        line-height: 1;
        letter-spacing: 0.05em;
      }
    `}</style>
  </header>
)

export default Header
