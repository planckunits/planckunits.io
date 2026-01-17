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
          background: var(--color-primary-900);
          color: var(--color-white);
          padding: var(--space-12) var(--space-4);
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
          color: var(--color-neutral-300);
          font-size: var(--text-sm);
        }

        .contact-email {
          color: var(--color-white);
          font-family: var(--font-mono);
          font-size: var(--text-base);
          text-decoration: none;
          padding: var(--space-2) var(--space-4);
          background: var(--color-primary-700);
          border-radius: var(--radius-md);
          transition: background var(--transition-fast);
        }

        .contact-email:hover {
          background: var(--color-primary-600);
        }

        .locale-switcher {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
        }

        .locale-switcher a {
          color: var(--color-neutral-300);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .locale-switcher a:hover {
          color: var(--color-white);
        }

        .locale-switcher .active {
          color: var(--color-white);
          font-weight: 600;
        }

        .locale-switcher .divider {
          color: var(--color-neutral-500);
        }

        .copyright {
          color: var(--color-neutral-500);
          font-size: var(--text-sm);
          margin: 0;
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
