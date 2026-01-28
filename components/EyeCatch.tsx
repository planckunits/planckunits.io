/* eslint-disable @next/next/no-img-element */
import { useLocale } from '../i18n/useLocale'

const EyeCatch = () => {
  const { t } = useLocale()

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo-container">
          <img src="static/logo-name.svg" alt="PlanckUnits" />
        </div>

        <h1>
          {t.heroHeadline.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>

        <p className="subheadline">{t.heroSubheadline}</p>

        <div className="cta-group">
          <a href="mailto:info@planckunits.com" className="btn btn-primary">
            {t.heroCtaPrimary}
          </a>
          <a href="#works" className="btn btn-secondary">
            {t.heroCtaSecondary}
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 1.5rem;
          background: var(--color-white);
          border-bottom: 1px solid var(--color-gray-200);
        }

        .hero-content {
          position: relative;
          max-width: 800px;
          text-align: center;
        }

        .logo-container {
          margin-bottom: 2.5rem;
        }

        .logo-container img {
          width: 200px;
          height: auto;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 1.5rem;
          color: var(--color-gray-900);
        }

        .subheadline {
          font-size: 1.1rem;
          line-height: 1.7;
          margin: 0 0 2.5rem;
          color: var(--color-gray-600);
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          padding: 0.875rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          font-size: 1rem;
        }

        .btn-primary {
          background: var(--color-primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--color-primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
          background: var(--color-white);
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
        }

        .btn-secondary:hover {
          background: var(--color-gray-50);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 4rem 1.5rem;
            min-height: 400px;
          }

          .logo-container img {
            width: 150px;
          }

          h1 {
            font-size: 2rem;
          }

          .subheadline {
            font-size: 1rem;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 1.75rem;
          }

          .subheadline {
            font-size: 0.9375rem;
          }

          .cta-group {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default EyeCatch
