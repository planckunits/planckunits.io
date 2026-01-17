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
        font-weight: 600;
        margin: 0 0 var(--space-12);
        color: var(--color-primary-700);
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
