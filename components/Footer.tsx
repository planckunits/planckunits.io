import Link from 'next/link'
import { useLocale } from '../i18n/useLocale'

const Footer = () => {
  const { locale, t } = useLocale()

  return (
    <div>
      <footer>
        <p className="contact">
          {t.contact}: <code>info@planckunits.com</code>
        </p>
        <div style={{ display: 'flex', gap: '4px' }}>
          {locale === 'ja' ? (
            <>
              <span>ja</span>
              <span>/</span>
              <Link href="/en" locale="en" passHref>
                en
              </Link>
            </>
          ) : (
            <>
              <Link href="/" locale="ja" passHref>
                ja
              </Link>
              <span>/</span>
              <span>en</span>
            </>
          )}
        </div>
        <p className="copy">&copy; {`2017-2022 PlanckUnits co.,ltd`}</p>
      </footer>
      <style jsx>{`
        footer {
          padding: 20px;
        }
        .contact {
          text-align: center;
        }
        .copy {
          text-align: right;
        }
      `}</style>
    </div>
  )
}

export default Footer
