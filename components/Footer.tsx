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
          <span className="contact-email">
            info@planckunits.com
          </span>
        </div>

        <div className="locale-switcher">
          {locale === 'ja' ? (
            <>
              <span className="active">ja</span>
              <span className="divider">/</span>
              <Link href="/en" locale="en">
                en
              </Link>
            </>
          ) : (
            <>
              <Link href="/" locale="ja">
                ja
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
          background: linear-gradient(135deg, #2D4851 0%, #1a2d35 100%);
          color: rgba(255, 255, 255, 0.9);
          padding: var(--space-12) var(--space-4);
          border-top: 2px solid rgba(125, 191, 217, 0.3);
          position: relative;
          z-index: 1;
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
          color: #116D93;
          font-family: var(--font-mono);
          font-size: var(--text-base);
          padding: var(--space-3) var(--space-5);
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(125, 191, 217, 0.3);
          border-radius: var(--radius-md);
          font-weight: 600;
        }

        .locale-switcher {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: var(--text-sm);
          font-family: var(--font-mono);
        }

        .locale-switcher a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          padding: var(--space-1) var(--space-2);
        }

        .locale-switcher a:hover {
          color: rgba(255, 255, 255, 1);
        }

        .locale-switcher .active {
          color: rgba(255, 255, 255, 1);
          font-weight: 700;
        }

        .locale-switcher .divider {
          color: rgba(255, 255, 255, 0.4);
        }

        .copyright {
          color: rgba(255, 255, 255, 0.5);
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
