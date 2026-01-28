import Link from 'next/link'
import { useLocale } from '../i18n/useLocale'

const Footer = () => {
  const { locale, t } = useLocale()
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content">
        <div className="contact-section">
          <span className="contact-label">{t.contact}</span>
          <a href="mailto:info@planckunits.com" className="contact-email">
            info@planckunits.com
          </a>
        </div>

        <div className="locale-switcher">
          {locale === 'ja' ? (
            <>
              <span className="active">ja</span>
              <span className="divider">/</span>
              <Link href="/en" locale="en">
                <a>en</a>
              </Link>
            </>
          ) : (
            <>
              <Link href="/" locale="ja">
                <a>ja</a>
              </Link>
              <span className="divider">/</span>
              <span className="active">en</span>
            </>
          )}
        </div>

        <p className="copyright">
          &copy; 2017-{currentYear} PlanckUnits co.,ltd
        </p>
      </div>

      <style jsx>{`
        footer {
          background: rgba(10, 14, 39, 0.95);
          backdrop-filter: blur(10px);
          color: var(--color-white);
          padding: var(--space-12) var(--space-4);
          border-top: 1px solid rgba(0, 240, 255, 0.2);
          position: relative;
          z-index: 1;
        }

        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gradient-cyber);
          opacity: 0.5;
        }

        .footer-content {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
        }

        .contact-section {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .contact-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: var(--text-sm);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .contact-email {
          color: var(--color-accent-cyan);
          font-family: var(--font-mono);
          font-size: var(--text-base);
          text-decoration: none;
          padding: var(--space-3) var(--space-5);
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid var(--color-accent-cyan);
          border-radius: var(--radius-md);
          transition: all var(--transition-normal);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }

        .contact-email:hover {
          background: rgba(0, 240, 255, 0.2);
          box-shadow: var(--shadow-neon-cyan);
          transform: translateY(-2px);
        }

        .locale-switcher {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: var(--text-sm);
          font-family: var(--font-mono);
        }

        .locale-switcher a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          padding: var(--space-1) var(--space-2);
        }

        .locale-switcher a:hover {
          color: var(--color-accent-cyan);
          text-shadow: 0 0 10px var(--color-accent-cyan);
        }

        .locale-switcher .active {
          color: var(--color-accent-cyan);
          font-weight: 700;
          text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }

        .locale-switcher .divider {
          color: rgba(255, 255, 255, 0.3);
        }

        .copyright {
          color: rgba(255, 255, 255, 0.4);
          font-size: var(--text-sm);
          margin: 0;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
        }

        @media (max-width: 640px) {
          .contact-section {
            flex-direction: column;
            gap: var(--space-2);
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
