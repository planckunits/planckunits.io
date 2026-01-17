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
        background: var(--color-white);
        z-index: 100;
        border-bottom: 1px solid var(--color-neutral-100);
      }

      nav {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: var(--space-3) var(--space-4);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        text-decoration: none;
        color: var(--color-primary-700);
        font-weight: 600;
        font-size: var(--text-lg);
        transition: color var(--transition-fast);
      }

      .brand:hover {
        color: var(--color-primary-500);
      }

      span {
        line-height: 1;
      }
    `}</style>
  </header>
)

export default Header
