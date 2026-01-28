import Link from 'next/link'
import Logo from './Logo'

const Header = () => (
  <header>
    <nav>
      <Link href="/" className="brand">
        <Logo />
        <span>PlanckUnits</span>
      </Link>
    </nav>
    <style jsx>{`
      header {
        position: sticky;
        top: 0;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        z-index: 100;
        border-bottom: 2px solid rgba(118, 75, 162, 0.3);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
      }

      nav {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: var(--space-4) var(--space-4);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      nav :global(.brand) {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        text-decoration: none;
        color: white;
        font-weight: 700;
        font-size: var(--text-xl);
        transition: all var(--transition-normal);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      nav :global(.brand:hover) {
        color: rgba(255, 255, 255, 0.9);
        transform: translateY(-1px);
      }

      nav :global(.brand) span {
        line-height: 1;
        letter-spacing: 0.05em;
      }

      @media (max-width: 1024px) {
        nav :global(.brand) {
          gap: var(--space-3);
          font-size: var(--text-lg);
        }
      }

      @media (max-width: 768px) {
        nav {
          padding: var(--space-3) var(--space-4);
        }

        nav :global(.brand) {
          gap: var(--space-2);
          font-size: var(--text-base);
        }
      }

      @media (max-width: 640px) {
        nav {
          padding: var(--space-3) var(--space-3);
        }

        nav :global(.brand) {
          gap: var(--space-2);
          font-size: var(--text-sm);
        }
      }

      @media (max-width: 480px) {
        nav :global(.brand) {
          font-size: 14px;
        }
      }
    `}</style>
  </header>
)

export default Header
