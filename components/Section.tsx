import React, { ReactNode } from 'react'

type Props = {
  name?: string
  id?: string
  children: ReactNode
}

const Section: React.FC<Props> = ({ children, name, id }) => (
  <section id={id}>
    <div className="section-inner">
      {name && <h2>{name}</h2>}
      {children}
    </div>

    <style jsx>{`
      section {
        padding: var(--space-20) var(--space-4);
      }

      .section-inner {
        max-width: var(--max-width);
        width: 100%;
        margin: 0 auto;
        font-size: var(--text-lg);
      }

      h2 {
        text-align: center;
        font-size: var(--text-4xl);
        font-weight: 800;
        margin: 0 0 var(--space-12);
        background: linear-gradient(135deg, #91C2D6 0%, #116D93 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        position: relative;
      }

      h2::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: linear-gradient(135deg, #91C2D6 0%, #116D93 100%);
        box-shadow: 0 2px 8px rgba(125, 191, 217, 0.3);
      }

      @media (max-width: 1024px) {
        .section-inner {
          max-width: 800px;
        }
      }

      @media (max-width: 768px) {
        section {
          padding: var(--space-16) var(--space-4);
        }

        h2 {
          font-size: var(--text-3xl);
          margin-bottom: var(--space-8);
        }
      }

      @media (max-width: 640px) {
        section {
          padding: var(--space-12) var(--space-4);
        }

        .section-inner {
          font-size: var(--text-base);
        }

        h2 {
          font-size: var(--text-2xl);
        }
      }
    `}</style>
  </section>
)

export default Section
