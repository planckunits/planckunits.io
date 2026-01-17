/* eslint-disable @next/next/no-img-element */
import { useLocale } from '../i18n/useLocale'
import Button from './Button'

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
          <Button href="mailto:info@planckunits.com" variant="primary" size="lg">
            {t.heroCtaPrimary}
          </Button>
          <Button href="#works" variant="secondary" size="lg">
            {t.heroCtaSecondary}
          </Button>
        </div>

        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-value">{t.trustYears}</span>
            <span className="trust-label">{t.trustYearsLabel}</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-value">{t.trustProjects}</span>
            <span className="trust-label">{t.trustProjectsLabel}</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-value">{t.trustStack}</span>
            <span className="trust-label">{t.trustStackLabel}</span>
          </div>
        </div>
      </div>

      {/* Placeholder for future animations */}
      <div className="animation-layer" aria-hidden="true" />

      <style jsx>{`
        .hero {
          position: relative;
          min-height: calc(100vh - 60px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-12) var(--space-4);
          background: linear-gradient(
            180deg,
            var(--color-white) 0%,
            var(--color-neutral-50) 100%
          );
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          text-align: center;
        }

        .logo-container {
          margin-bottom: var(--space-8);
        }

        .logo-container img {
          width: 200px;
          height: auto;
        }

        h1 {
          font-size: var(--text-5xl);
          font-weight: 700;
          line-height: 1.2;
          color: var(--color-primary-700);
          margin: 0 0 var(--space-6);
        }

        .subheadline {
          font-size: var(--text-xl);
          color: var(--color-neutral-700);
          line-height: 1.6;
          margin: 0 0 var(--space-10);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-group {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-16);
        }

        .trust-indicators {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-6);
          padding: var(--space-6) var(--space-8);
          background: var(--color-white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-1);
        }

        .trust-value {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--color-primary-700);
        }

        .trust-label {
          font-size: var(--text-sm);
          color: var(--color-neutral-500);
        }

        .trust-divider {
          width: 1px;
          height: 40px;
          background: var(--color-neutral-300);
        }

        .animation-layer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding: var(--space-16) var(--space-4);
          }

          .logo-container img {
            width: 150px;
          }

          h1 {
            font-size: var(--text-4xl);
          }

          .subheadline {
            font-size: var(--text-lg);
          }

          .trust-indicators {
            flex-direction: column;
            gap: var(--space-4);
            padding: var(--space-6);
          }

          .trust-divider {
            width: 60px;
            height: 1px;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: var(--text-3xl);
          }

          .subheadline {
            font-size: var(--text-base);
          }

          .cta-group {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  )
}

export default EyeCatch
