/* eslint-disable @next/next/no-img-element */
import { useLocale } from '../i18n/useLocale'
import { motion } from 'framer-motion'
import Button from './Button'

const EyeCatch = () => {
  const { t } = useLocale()

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="static/logo-name.svg" alt="PlanckUnits" className="floating" />
        </motion.div>

        <motion.h1
          className="gradient-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.heroHeadline.split('\n').map((line, i) => (
            <span key={i} className="hero-text-line">
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.heroSubheadline}
        </motion.p>

        <motion.div
          className="cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button href="mailto:info@planckunits.com" variant="primary" size="lg">
            {t.heroCtaPrimary}
          </Button>
          <Button href="#works" variant="secondary" size="lg">
            {t.heroCtaSecondary}
          </Button>
        </motion.div>

        <motion.div
          className="trust-indicators glass"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
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
          background: var(--gradient-dark);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(0, 240, 255, 0.1) 0%,
            transparent 50%
          );
          pointer-events: none;
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
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 var(--space-6);
          letter-spacing: -0.02em;
        }

        .hero-text-line {
          display: inline-block;
          position: relative;
        }

        .hero-text-line::after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          top: 2px;
          z-index: -1;
          color: var(--color-accent-cyan);
          opacity: 0.3;
        }

        .subheadline {
          font-size: var(--text-xl);
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0 0 var(--space-10);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 300;
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
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-neon-cyan);
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
          background: var(--gradient-cyber);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .trust-label {
          font-size: var(--text-sm);
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trust-divider {
          width: 1px;
          height: 40px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--color-accent-cyan) 50%,
            transparent 100%
          );
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
